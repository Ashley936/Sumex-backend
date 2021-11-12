const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  /* accountNo: {
    type: String,
    required: [true, "ERROR from schema: No acc no. provided"],
    unique: true,
    minlength: 12,
    maxlength: 12,
  }, */
  accountBal: {
    type: Number,
    default: 0,
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
      loadId: {
        type: String,
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
      type: Boolean,
      default: false,
    },
    cardNo: {
      type: String,
      minlength: 10,
      maxlength: 11,
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
