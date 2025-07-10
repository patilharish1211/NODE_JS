const express=require("express")
const AllRoutes = require("./routes/allRoutes")

const app=express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.render("Home")
})

app.get("/about",(req,res)=>{
    res.render("About")
})

app.get("/contact",(req,res)=>{
    res.render("Contect")
})

app.get("/product",(req,res)=>{
    res.render("Product")
})

app.use("/api",AllRoutes)

app.set("view engine","ejs")


app.listen(8080,()=>{
    console.log("server is running on port 8080")
})