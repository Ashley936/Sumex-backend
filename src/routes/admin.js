const User = require("../models/User");
const Account = require("../models/Account");
const auth = require("../middleware/auth");

const express = require("express");
const router = new express.Router();

router.get("/admin/users", auth, async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(400).send({ error: "You are not an Admin" });
  } else {
    //const allUsers = await User.find({ isAdmin: false })
    const allUsers = await Account.find({}).populate({ path: "userId" }).exec();
    const finalList = allUsers.filter((user) => !user.userId.isAdmin);
    res.send(finalList);
  }
});

router.patch("/admin/edit/:id", auth, async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(400).send({ error: "You are not an Admin" });
  } else {
    const changes = Object.keys(req.body);
    const userAcc = await Account.findOne({ userId: req.params.id });
    const user = await User.findOne({ _id: req.params.id });
    const accountChanges = [
      "accountBal",
      "transactionHistory",
      "loanHistory",
      "cardInfo",
      "accountStatus",
    ];
    const userChanges = ["idInfo"];
    const isValid = changes.every(
      (change) =>
        userChanges.includes(change) || accountChanges.includes(change)
    );
    if (!isValid) {
      return res.status(404).send({ error: "Some field is invalid" });
    }
    try {
      changes.forEach(async (change) => {
        if (userChanges.includes(change)) {
          user[change] = req.body[change];
        } else {
          if (change === "transactionHistory" || change === "loanHistory") {
            let index = userAcc[change].findIndex((item) => {
              return item._id.toString() === req.body[change]._id;
            });

            userAcc[change][index] = { ...req.body[change] };
          } else {
            userAcc[change] = req.body[change];
          }
        }
      });
      await userAcc.save();
      await user.save();
      res.send({ accChanged: userAcc });
    } catch (e) {
      console.log(e);
      res.status(400).send({ error: "Update failed" });
    }
  }
});

router.delete("/admin/delete/:id", auth, async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(400).send({ error: "You are not an Admin" });
  } else {
    try {
      const user = await User.findOne({ _id: req.params.id });
      const account = await Account.findOne({ userId: user._id });
      await account.remove();
      await user.remove();
      res.status(200).send({ user, account });
    } catch (e) {
      res.status(200).send({ error: "No user found" });
    }
  }
});

module.exports = router;
