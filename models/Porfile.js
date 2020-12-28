const mongoose = require("mongoose")
const ProfileSchema = new mongoose.Schema({
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
    pharmacy:String,
    insurance:String,
    policyId: String,
    medicalHistory: String,
    mdeicineTaking:String,
    surgicalHistory:String

})

module.exports = Profile = mongoose.model("profile",ProfileSchema)