const mongoose=require("mongoose");


const NotesSchema=new mongoose.Schema({
    title:String,
    description:String,
    Image:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ0hkU8JU2Vs6uN7B3vLQb2Hk0v_AM8wtojf3jhWdE7vDRGTDraPmHdQA&s"
    },
    Userid:{
        type:String,
    }
},{
    timestamps:true,
    versionKey:false
})

const Notesmodel=mongoose.model("Notes",NotesSchema)

module.exports=Notesmodel