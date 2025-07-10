
const dotenv=require("dotenv")
dotenv.config()
const jwt=require("jsonwebtoken")


const isAuth=(req,res,next)=>{
    const {verificationToken}=req.cookies
    
    if(!verificationToken){
        return res.status(401).json({message:'You are not authenticated! Please Login Again'})
    }

    jwt.verify(verificationToken, process.env.privateKey, function(err, decoded) {
        if(err)
        {
            return res.status(401).json({message:err})
        }
        
        req.user=decoded.userData
        console.log(decoded)
        
        next()
    });

}

module.exports=isAuth
