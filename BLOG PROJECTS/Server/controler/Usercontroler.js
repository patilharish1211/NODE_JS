const { Usermodel } = require("../model/User.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const logUser = require("../midleware/UserLogger");


const Signup = async (req, res, next) => {
   const { email, password, Location, name, ConfirmPassword,role,dob } = req.body
   if (!email || !password || !Location || !name || !ConfirmPassword || !role|| !dob) {
      return res.status(400).json({ message: "Please fill in all fields" })
   }
   if (password !== ConfirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" })
   }
   try {
      const user = await Usermodel.findOne({ email });
      if (user) {
         return res.status(400).json({ message: "email already Exits " })
      }
      bcrypt.hash(password, 5, async (err, hash) => {
         if (err) {
            return res.status(500).json({ message: "Error hashing password" })
         }
         const User = await Usermodel.create({ email, password: hash, ConfirmPassword: hash, Location, name, })
         res.status(201).json({ message: "User created successfully", User })
      });
   } catch (error) {
      res.status(400).json({ message: error })
   }
}
const Signin = async (req, res, next) => {
   const { email, password } = req.body;
   if (!password || !email) {
      return res.status(400).json({ message: "Please fill in all fields" })
   }
   const User = await Usermodel.findOne({ email });
   if (!User) {
      return res.status(400).json({ message: "User not found" })
   }
   try {
      bcrypt.compare(password, User.password, (err, result) => {
         if (err) {
            return res.status(500).json({ message: "Error comparing password" })
         }
         if (result) {
            const token = jwt.sign({ "id": User._id }, '1234', {
               expiresIn: '7d',
            })
            logUser(User.name)
            return res.cookie("token", token).status(200).json({ message: "User logged in successfully",User })
         }
         res.status(400).json({ message: "Password does not match" })
      });
   } catch (error) {
      res.status(400).json({ message: "Something Went wrong " })
   }
}

const Usergetall = async (req, res) => {
   try {
      const Userdetails = await Usermodel.find();
      res.status(200).json({ Userdetails })
   } catch (error) {
      console.log(error)
   }
}

const Usergetbyid = async (req, res) => {

   const { id } = req.params
   try {
      const Userdetails = await Usermodel.findById(id)
      if (!Userdetails) {
         return res.status(400).json({ message: "User not found" })
      }
      res.status(400).json({ Userdetails });
   } catch (error) {
      console.log(error)
   }
}
module.exports = { Signup, Signin, Usergetall ,Usergetbyid}