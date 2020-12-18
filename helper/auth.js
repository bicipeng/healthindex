const webToken = require("jsonwebtoken")
const config = require("config")


module.exports = function (req,res,next){
    //get token from header 
    const token = req.header("x-auth-token")

    //if no token is sent with header, unauthorized access
 if(!token){
     return res.status(401).json({message:"authorization denied"})
 }
 //if there is a token, we need to verify the token 
 try {
     const decoded = webToken.verify(token,config.get("webToken"))
     req.user = decoded.user
     next()
 } catch (error) {
     res.status(401).json({message:"Token is not working "})
 }
}