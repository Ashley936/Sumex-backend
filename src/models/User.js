const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value))
          throw new Error("ERROR from schema: Email is invalid");
      },
    },
    password: {
      type: String,
      required: true,
      minlength: [7, "ERROR from schema: Min length is 7"],
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("ERROR from schema: Invalid password!!");
        }
      },
    },
    age: {
      type: Number,
      default: 18,
      trim: true,
      validate(value) {
        if (value <= 0) {
          throw new Error("ERROR from schema: Age should be positive!!!");
        }
      },
    },
    address: {
      type: String,
    },
    aadharCard: {
      type: Buffer,
    },
    profilePic: {
      type: Buffer,
    },
  },
  { timestamps: true }
);
// accountInfo will contain all the account collections which have userId = _id 
// whereas in case of userId will contain the user collection match
userSchema.virtual('accountInfo', {
    ref: 'Account',
    foreignField: 'userId',
    localField: '_id'
})
const User = mongoose.model('User', userSchema);

module.exports = User;