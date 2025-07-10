const express=require("express")
const { singup, singin } = require("../controller/user.controller")



const userRourtes=express.Router("")


userRourtes.post("/register",singup)

userRourtes.post("/login",singin)

module.exports=userRourtes