const mongoose=require("mongoose")

const MovieScheama=new mongoose.Schema({
    title:String,
    genre:String,
    director:String,
    releaseYear:Number,
    description:String,
    userID:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey:false
})

const MoviesModel=mongoose.model("movies",MovieScheama)

module.exports=MoviesModel
