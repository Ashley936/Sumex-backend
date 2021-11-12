const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Account = require("../models/Account");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    const account = await Account.findOne({ userId: user._id });
    req.user = user;
    req.token = token;
    req.account = account;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: "Plaease Authenticate" });
  }
};
module.exports = auth;
