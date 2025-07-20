const Usermodel = require("../model/User.model");
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")
const Signup=async(req,res)=>{

const {email,name,password}=req.body;
if(req.body.role){
   return res.status(400).json({message:"Role can not be  send by the user"})
}
  if(!email || !name||!password){
      return  res.status(400).json({message:"Please Fill the all Field"})
  }
  try {
      const User =  await Usermodel.findOne({email})
      if(User){
          return  res.status(400).json({message:"email already exits"})
      }
      bcrypt.hash(password, 5, async(err, hash)=> {
       if(err){
         return  res.status(400).json({message:"Something Went wrong"})
       }
       await Usermodel.create({email,password:hash,name})
       res.status(200).json({message:"User Created Successfully",User})
    });      
  } catch (error) {
       console.log(error)
  }
}
const Signin=async(req,res)=>{
    const {email ,password}=req.body;
    if(!email || !password){
       return  res.status(400).json({message:"Fill the all the fields"})
    }

    const User=await Usermodel.findOne ({email});
    if(!User){
       return res.status(400).json({message:"User not found"})
    }
    try {
        bcrypt.compare(password, User.password, (err, result) => {
           if (err) {
              return res.status(500).json({ message: "Error comparing password" })
           }
           if (result) {
                 const {password, ...rest}=User._doc
                const Token=jwt.sign({ UserID:rest} ,process.env.Privatekey,{
                 expiresIn: '7d',
              })  
              return res.cookie('token',Token).status(200).json({ message: "User logged in successfully" ,...rest})
           }
           res.status(400).json({ message: "Password does not match" })
        });
     } catch (error) {
        res.status(400).json({ message: "Something Went wrong " })
     }

}







module.exports={Signup,Signin}

