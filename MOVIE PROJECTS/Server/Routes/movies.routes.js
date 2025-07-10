const express=require("express")
const isAuth = require("../Middleware/Auth")
const { getAllMovies, moviesCreate, movieDelete, updateMovies } = require("../controller/movies.controller")


const moviesRouter=express.Router("")

// Post , Delete , Patch , Update 

moviesRouter.get("/get",isAuth,getAllMovies)

moviesRouter.post("/create",isAuth,moviesCreate)

moviesRouter.put("/update/:movieID",isAuth,updateMovies)

moviesRouter.delete("/delete/:movieID",isAuth,movieDelete)


module.exports=moviesRouter
