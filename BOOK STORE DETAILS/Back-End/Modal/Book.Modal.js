const mongoose=require("mongoose")


const bookSchema = new mongoose.Schema({
    title : String,
    author : String,
    price : Number,
    description : String,
    ISBN : String, 
    image: String
  },{ versionKey: false });
  
  const BookModal = mongoose.model('Book', bookSchema);

  module.exports=BookModal