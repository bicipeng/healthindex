const express = require("express")
const router = express.Router()
const auth = require("../helper/auth")
// Get  /auth
//get personal information if you are login 
router.get("/", auth, (req, res) => res.send("auth route"))


module.exports = router