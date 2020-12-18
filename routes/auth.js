const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const auth = require("../helper/auth")
const User = require(".././models/User")
const webToken = require("jsonwebtoken")
const config = require("config")
const { check, validationResult } = require("express-validator")
// Get  /auth
//get personal information if you are login 
router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password")
        res.json(user)
    } catch (error) {
        res.status(500).send("Server Error")
    }
})
//verify a login post api
router.post("/", [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a password").exists()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body
    try {
        //check if user already exists
        let user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ errors: [{ msg: "User doesn't exits" }] })
        }
        //compare password with record 
        const matched = await bcrypt.compare(password, user.password)
        if (!matched) {
            res.status(400).json({ errors: [{ msg: "Invalid Password" }] })
        }
        //work with token ,id is the one generate in mongoDb
        const payload = {
            user: {
                id: user.id
            }
        }
        //get the token back if user is a registered user
        webToken.sign(payload, config.get("webToken"), { expiresIn: 360000000 }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
   
    } catch (error) {
        console.error(error.message)
    }
})


module.exports = router