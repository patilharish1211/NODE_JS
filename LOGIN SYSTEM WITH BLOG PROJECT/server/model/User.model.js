const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        default:"User"
    }
})

const Usermodel=mongoose.model("UserData",UserSchema)

module.exports=Usermodel