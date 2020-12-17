const express = require("express")
const router = express.Router()

// Get api api/profile
//get personal information if you are login 
router.get("/", (req, res) => res.send("profile route"))


module.exports = router