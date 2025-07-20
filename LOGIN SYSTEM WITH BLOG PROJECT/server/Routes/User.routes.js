const express=require("express");
const { Signup, Signin } = require("../controler/User.controler");
const UserRoute=express.Router();
UserRoute.post("/signup",Signup);
UserRoute.post("/signin",Signin);
module.exports=UserRoute