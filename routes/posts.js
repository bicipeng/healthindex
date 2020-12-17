const express = require("express")
const router = express.Router()

// Get api api/p
//get personal information if you are login 
router.get("/", (req, res) => res.send("posts route"))


module.exports = router