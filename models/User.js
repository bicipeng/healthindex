//create a schema for user
const mongoose = require ("mongoose")
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
//creating a model mongoose.model(modelName,schema)
module.exports = User = mongoose.model("user",UserSchema)