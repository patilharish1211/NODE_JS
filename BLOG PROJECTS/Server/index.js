const express=require("express");
const app=express();
const cookieParser = require('cookie-parser');
const cors=require("cors")
app.use(cors())
app.use(cookieParser())
app.use(express.json());
const dotenv=require("dotenv");
const connection = require("./db");
const Expressrouter = require("./Routes/UserRoutes");
dotenv.config()
app.use("/",Expressrouter)

app.listen(process.env.Port||3000,()=>{
    try {
        connection
          console.log("Server running on port 3000")
    } catch (error) {
        console.log(error)
    }
})