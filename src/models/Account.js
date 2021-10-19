const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  accountNo: {
    type: String,
    required: [true, "ERROR from schema: No acc no. provided"],
    unique: true,
    minlength: 12,
    maxlength: 12,
  },
  accountBal: {
    type: Number,
    required: true,
    default: 0,
  },
  transactionHistory: [
    {
      transactionType: {
        type: String,
        required: true,
      },
      transactionId: {
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
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      finalBal: {
        type: Number,
        required:true
      },
      interest: {
        type: Number,
        required: true
      }
    },
  ],
  cardInfo: {
    card: {
      type: Boolean,
      default: false
    },
    cardNo: {
      type: String,
      required: true
    }
  }
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
