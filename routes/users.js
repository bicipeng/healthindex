const express = require("express")
const User = require(".././models/User")
const bcrypt = require("bcryptjs")
const webToken = require("jsonwebtoken")
const config = require("config")
const router = express.Router()
const { check, validationResult } = require("express-validator")
// post api 
//register user 
router.post("/", [
    check("firstName", 'First Name is required').not().isEmpty(),
    check("lastName", 'Last Name is required').not().isEmpty(),
    check("NPI", 'NPI is required').not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password should be at least 8 or more character").isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { firstName,lastName, NPI,email, password } = req.body
    try {
        //check if user already exists
        let user = await User.findOne({ email })
        if (user) {
            res.status(400).json({ errors: [{ msg: "User Already Exits" }] })
        }
        // if user doesn't exit,create a new instance of user 
        user = new User({
            firstName,
            lastName,
            NPI,
            email,
            password
        })

        //encrypt password and save the user
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save()

        //work with token ,id is the one generate in mongoDb
        const payload = {
            user: {
                id: user.id
            }
        }
        webToken.sign(payload, config.get("webToken"), { expiresIn: 360000000 }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
   
    } catch (error) {
        console.error(error.message)
    }
})


module.exports = router