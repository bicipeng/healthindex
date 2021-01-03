const express = require("express")
const connectDB = require("./config/db")
const path = require("path")

const cors = require("cors")
const app = express()
connectDB()
app.use(express.json({ extended: false }))
app.use(cors())


//routes
app.use("/users", require("./routes/users"))
app.use("/auth", require("./routes/auth"))
app.use("/profiles", require("./routes/profiles"))
app.use("/", require("./routes/patient"))

//static aceest
if (process.env.NODE_ENV == "production") {
    //set static folder
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Listening on port ${PORT} `))

