const mongoose = require("mongoose")
const PatientProfileSchema = new mongoose.Schema({
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
    pharmacy:String,
    insurance:String,
    policyId: String,
    medicineHistory:String,
    surgicalHistory:String

})

module.exports = PatientProfile = mongoose.model("patientProfile",PatientProfileSchema)