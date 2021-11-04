const User = require("../models/User");
const Account = require("../models/Account");
const auth = require("../middleware/auth");

const multer = require("multer");
const sharp = require("sharp");
const express = require("express");
const router = new express.Router();

// User signIn  return User
router.post("/signup", async (req, res) => {
  const user = new User(req.body);
  const account = new Account({ userId: user._id });

  try {
    await user.save();
    await account.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token, account });
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: "Invalid user info" });
  }
});
// User LogIn return User

router.post("/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const account = await Account.findByUserId(user._id);
    const token = await user.generateAuthToken();
    res.send({ user, token, account });
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: "No such user found" });
  }
});
// Get User and account by profile

router.get("/user", auth, async (req, res) => {
  res
    .status(200)
    .send({ user: req.user, token: req.token, account: req.account });
});

// Edit user properties
router.patch("/user", auth, async (req, res) => {
  const changes = Object.keys(req.body);
  const userChanges = ["userName", "email", "password", "age", "address"];
  const accountChanges = ["accountBal", "transactionHistory", "loanHistory"];
  const isValid = changes.every(
    (change) => userChanges.includes(change) || accountChanges.includes(change)
  );
  if (!isValid) {
    return res.status(404).send({ error: "Some field is invalid" });
  }
  try {
    changes.forEach((change) => {
      if (userChanges.includes(change)) {
        req.user[change] = req.body[change];
      } else if (accountChanges.includes(change)) {
        req.account[change] = req.body[change];
      }
    });

    await req.user.save();
    await req.account.save();
    res.send({ user: req.user, account: req.account });
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: "Update failed" });
  }
});

// Edit user profile pic and identity card
const upload = multer({
  //dest:'images'
  limits: {
    fileSize: 3000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image!!"));
    }
    cb(undefined, true);
  },
});

router.post(
  "/user/pfp",
  auth,
  upload.single("pfp"),
  async (req, res) => {
    if (!req.file) {
      req.user.profilePic = undefined;
    } else {
      const buffer = await sharp(req.file.buffer)
        .resize({ width: 250, height: 250 })
        .png()
        .toBuffer();
      req.user.profilePic = buffer;
    }
    await req.user.save();
    res.send(req.user);
  },
  (error, req, res, next) => {
    res.status(404).send({ error: error.message });
  }
);

// get profile pic
router.get("/user/pfp", auth, async (req, res) => {
  if (!req.user.profilePic) {
    res.send({ error: "No pfp set" });
  } else {
    res.set("Content-Type", "image/png");
    res.send(req.user.profilePic);
  }
});

// Upload idCard
router.post(
  "/user/idCard",
  auth,
  upload.single("idCard"),
  async (req, res) => {
    if (!req.file) {
      req.user.idCard = undefined;
    } else {
      const buffer = await sharp(req.file.buffer).png().toBuffer();
      req.user.idCard = buffer;
    }
    await req.user.save();
    res.send(req.user);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

// get id card
router.get("/user/idCard", auth, async (req, res) => {
  if (!req.user.idCard) {
    res.send({ error: "NO ID CARD!!" });
  } else {
    res.set("Content-Type", "image/png");
    res.send(req.user.idCard);
  }
});
// Delete user and their account
// Delete user if no account and delete account
// (see if more than 1 account is needed)

router.delete("/user", auth, async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  const account = await Account.findOne({ userId: user._id });
  await account.remove();
  await user.remove();
  res.status(200).send({ user, account });
});

// get all users
// get all accounts

module.exports = router;
