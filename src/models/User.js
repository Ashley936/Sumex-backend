const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    lastName: {
      type: String,
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
    address: {
      type: String,
    },
    unitNo: {
      type: String,
    },
    city: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    dob: {
      type: Date,
    },
    phoneNo: {
      type: Number,
    },
    gender: {
      type: String,
    },
    occupation: {
      type: String
    },
    annualIncome: {
      type: Number,
    },
    idCard: {
      type: Buffer,
    },
    idInfo: {
      idType: {
        type: String,
      },
      idVerified: {
        type: Boolean,
        default: false,
        required: true,
      },
    },
    profilePic: {
      type: Buffer,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// accountInfo will contain all the account collections which have userId = _id
// whereas in case of userId will contain the user collection match
userSchema.virtual("accountInfo", {
  ref: "Account",
  foreignField: "userId",
  localField: "_id",
});
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_TOKEN);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
userSchema.statics.findByCredentials = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("No such user found!!");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Wrong password!!!");
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
