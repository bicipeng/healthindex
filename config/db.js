const mongoose = require('mongoose')
const config = require('config')
const db = config.get("mongoURI")



const connectDB = async () => {
    try {
        //mongoose.connet() gives you a promise    
        await mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
        console.log("MongoDB Connected ....")
    } catch (error) {
        //if fail the error has a message property
        console.error(error.message)
        //exit process if fail to connect
        process.exit(1)
    }

}

module.exports = connectDB