const mongoose = require("mongoose")
const UserProfile = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    field: {
        type: String,
        required: true
    }
})

module.exports = UserProfile = mongoose.model("userProfile",UserProfile)