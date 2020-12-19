const express = require("express")
const connectDB = require("./config/db")

const cors = require("cors")
const app = express()
connectDB()
app.use(express.json({extended:false}))
app.use(cors())
app.get("/",(req,res)=>res.send("API RUNNING"))

//routes
app.use("/users",require("./routes/users"))
app.use("/auth",require("./routes/auth"))
app.use("/profile",require("./routes/profile"))
app.use("/posts",require("./routes/posts"))

const PORT = process.env.PORT || 8000

app.listen(PORT,()=> console.log(`Listening on port ${PORT} `))