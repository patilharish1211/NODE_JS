const mongose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()

const connection=mongose.connect(process.env.MONGOOSE)

module.exports=mongose.connection


