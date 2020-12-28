const express = require("express")
const router = express.Router()
const auth = require("../helper/auth")
const PatientProfile = require("../models/PatientProfile")
const User = require("../models/User")
const { check, validationResult } = require("express-validator")

// Get api api/profile
//get personal information if you are login /private route
router.get("/me", auth, async (req, res) => {
    try {
        console.log("req.user",req.user.id)
        const profile = await User.findById(req.user.id)
        console.log("profile",profile)
        if (!profile) {
            res.status(400).json({ message: "Prolile does't not exit" })
        }
        res.json(profile)
    } catch (error) {
 console.log(error)
    }
})


module.exports = router