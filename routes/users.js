const express = require("express")
const User = require(".././models/User")
//Users/bicipeng/Desktop/healthindex/models
const router = express.Router()
const { check, validationResult } = require("express-validator")
// post api 
//register user 
router.post("/", [
    check("name", 'Name is required').not().isEmpty(),
    check("emai", "Please enter a valid email").isEmail(),
    check("password", "Password should be at least 8 or more character").isLength({ min: 8 })
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
//check if user already exists
const {name, email, password} = req.body

    res.send("hey register user")
})


module.exports = router