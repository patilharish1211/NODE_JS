const express=require("express")
const cors = require('cors')

const {connection, BookModal} = require("./db");
const bookRoutes = require("./Contoroller/book.contoroller");



const app=express()
app.use(cors())

app.use(express.json());

app.use("/bookRoutes",bookRoutes)






app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Data Base Connect")

        console.log(`run port : ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})