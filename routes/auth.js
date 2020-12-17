const express = require("express")
const router = express.Router()

// Get api api/auth
//get personal information if you are login 
router.get("/", (req, res) => res.send("auth route"))


module.exports = router