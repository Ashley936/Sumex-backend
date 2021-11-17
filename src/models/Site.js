const mongoose = require("mongoose");
const validator = require("validator");
const siteSchema = new mongoose.Schema({
    adminEmail: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error("Email is invalid");
        },
    },
    bankName: {
        type: String
    },
    tagLine: {
        type: String
    },
    initialFees: {
        type: Number
    },
    number: {
        type: Number
    },
    address: {
        type: String
    }
})

const Site = mongoose.model("SiteInfo", siteSchema);
module.exports = Site;