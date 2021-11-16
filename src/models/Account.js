const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  accountBal: {
    type: Number,
    default: 0,
  },
  accountStatus: {
    type: String,
    default: "active"
  },
  transactionHistory: [
    {
      transactionType: {
        type: String,
        required: true,
      },
      bankType: {
        type: String,
        required: true,
      },
      accNo: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      finalBal: {
        type: Number,
        required: true,
      },
      transactionDate: {
        type: Date
      },
    },
  ],
  loanHistory: [
    {
      loanAmount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
      finalBal: {
        type: Number,
        required: true,
      },
      interest: {
        type: Number,
        required: true,
      },
      time: {
        type: Number,
      },
      purpose: {
        type: String,
      },
      loanApproved: {
        type: Boolean,
        default: false
      }
    },
  ],
  cardInfo: {
    cardApplied: {
      type: Boolean,
      default: false,
    },
    applicationDate: {
      type: Date
    },
    applicationApproved: {
      required: true,
      type: Boolean,
      default: false,
    },
    cardNo: {
      type: String,
    },
    cardType: {
      type: String
    },
    cardBrand: {
      type: String
    },
  },
});

accountSchema.statics.findByUserId = async function (userId) {
  const account = await Account.findOne({ userId });
  if (!account) {
    throw new Error("No account found");
  }
  return account;
};
const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
