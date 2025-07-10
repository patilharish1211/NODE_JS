const UserModel = require("../Model/User.model")
const dotenv=require("dotenv")
dotenv.config()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const singup= async(req,res)=>{

    const {name,email,password}=req.body

    if(req.body.role){
        return res.status(400).send({message:"User Is Not Send Role "})
    }
    if(!name || !email || !password){
        return res.status(400).send({message:"Please Fill All Fields"})   
    }

    try {
        
        const isUserExist=await UserModel.findOne({email})
        if(isUserExist)
        {
            return res.status(200).send({message:"Already User Hai "})
        }

        bcrypt.hash(password, 5, async(err, hash)=> {
            if(err)
            {
                console.log(err)
                return res.status(400).send({message:"Error in Hash Password"})
            }

            await UserModel.create({name,email,password:hash})
            res.status(201).send({message:"User Create Successfully"})

        });


    } catch (error) {
        res.send(error)
    }
}

const singin=async(req,res)=>{
    const {email,password}=req.body

    if(!email || !password){
        return res.status(400).json({message:"Please Fill all information"})
    }


    const isExistUser=await UserModel.findOne({email})
    if(!isExistUser){
        return res.status(400).json({message:"User Not Found Please SingUp"})
    }

    bcrypt.compare(password,isExistUser.password, function (err,result){
        if(err){
            return res.status(400).json({message:"Error in Compare Password"})
        }
        if(result){
            const {password,...rest}=isExistUser._doc
            
            jwt.sign({userData:rest},process.env.privateKey, function(err, token) {
                
                if(err)
                {
                    return res.status(400).json({message:"Json Token Error Not Create Token"})
                }
                
                return res.cookie("verificationToken",token).status(200).json({message:"Login Successfull",userData:rest})
            });
        }
        else
        {
            return res.status(400).json({message:"incorect password"})
        }
    })
    
}

module.exports={singup,singin}
