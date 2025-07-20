const express = require("express");
const { Signup, Signin, Usergetall, Usergetbyid } = require("../controler/Usercontroler");
const Auth = require("../midleware/Auth");
const Expressrouter = express.Router();
Expressrouter.post("/signup", Signup);
Expressrouter.post("/signin",Signin);
Expressrouter.get("/Users",Auth,Usergetall);
Expressrouter.get("/Users/:id",Auth,Usergetbyid)
module.exports = Expressrouter;
