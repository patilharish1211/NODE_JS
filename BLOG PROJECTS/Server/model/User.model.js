const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    ConfirmPassword:String,
    Location:String,
    role:{
        type:String,
    }
    ,dob:String
},{
    timestamps:true,
    versionKey:false
})

const Usermodel=mongoose.model("Users",UserSchema)
module.exports={Usermodel}