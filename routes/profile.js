const express = require("express")
const router = express.Router()
const auth = require("../helper/auth")
const UserProfile = require(".././models/UserProfile")
const User = require(".././models/User")
const { check, validationResult } = require("express-validator")

// Get api api/profile
//get personal information if you are login /private route
router.get("/me", auth, async (req, res) => {
    try {
        const profile = await UserProfile.findOne({ user: req.user.id })
        if (!profile) {
            res.status(400).json({ message: "Prolile does't not exit" })
        }
        res.json(profile)
    } catch (error) {
        res.status(500).setDefaultEncoding("Server Error")
    }
})
//post profile api: /profile
router.post("/", [auth, [
    check("firstName", 'First Name is required').not().isEmpty(),
    check("lastName", "Last Name is required").not().isEmpty(),
    check("dateOfBirth", "Date of birth is required").not().isEmpty(),
    check("field", "Field is required").not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { firstName, lastName,  field } = req.body
    const dateOfBirth = new Date(req.body.dateOfBirth)
    try {
       
     
    let   newProfile = new UserProfile({
        user:req.user.id,
            firstName,
            lastName,
            dateOfBirth,
            field
        })
      await newProfile.save()
        res.json(newProfile)
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = router