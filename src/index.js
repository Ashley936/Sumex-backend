const express = require("express");
const Account = require("./models/Account");
const User = require("./models/User");
require("./db/mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const app = express();

app.use(express.json());

const newUser = async () => {
  const user = await new User({
    userName: "Ash",
    email: "nami@gmail.com",
    password: "asdfghjk",
  });
  await user.save();
  const account = await new Account({ accBal: "234567890", userId: user._id });
  const account2 = await new Account({ accBal: "234", userId: user._id });
  await account.save();
  await account2.save();
  const newUser = await User.findOne({
    userName: "Ash",
  })
    .populate({ path: "accountInfo" })
    .exec();

  const acc = await Account.findOne({ accBal: "234" })
    .populate({path: "userId"})
    .exec();
  console.log(acc);
  //console.log(account2.userId === user._id);
};

app.listen(process.env.PORT, () => {
  console.log("Server setup at 3000: ");
  newUser();
});
