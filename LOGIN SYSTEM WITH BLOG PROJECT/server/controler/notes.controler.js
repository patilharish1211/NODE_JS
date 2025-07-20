const upload = require("../middleware/multer");
const Notesmodel = require("../model/notes.model");

const createNotes = async (req, res) => {
   const { title, description } = req.body;
   if (!title || !description) {
      return res.status(400).json({ message: "Please fill all fields" });
   }
   try {
      await Notesmodel.create({ title, description, Userid: req.user._id })
      res.status(200).json({ message: "Notes created Successfully.." })
   } catch (error) {
      res.status(400).json({ message: "Something went wrong", error })
   }
}
const deleteNotes = async (req, res) => {
   const { id } = req.params;
   console.log(id)

   const IsNotes = await Notesmodel.findById(id);
   if (!IsNotes) {
      return res.status(400).json({ message: "Notes not found" });
   }

   if (IsNotes.Userid != req.user._id) {
      return res.status(400).json({ message: "You can't delete this notes" });
   }

   try {
      await Notesmodel.findByIdAndDelete(id);
      res.status(200).json({ message: "Notes Deleted Successfully.." })
   } catch (error) {
      res.status(400).json({ message: "Something Went Wrong" })
   }
}
const getallnotesbyid = async (req, res) => {
   const { Userid } = req.params;

   if (Userid != req.user._id) {
      return res.status(400).json({ message: "You can't access this notes" })
   }
   const Usernotes = await Notesmodel.find({ Userid });
   console.log(Usernotes)
   if (Usernotes.length == 0) {
      return res.status(400).json({ message: "No notes found" })
   }
   try {
      res.status(200).json(Usernotes)
   } catch (error) {
      res.status(400).json({ message: 'Something went wrong' })
   }
}
const getsinglenotesbyid = async (req, res) => {
   const { notesid } = req.params;
   const IsNotes = await Notesmodel.findById(notesid);
   if (IsNotes.Userid != req.user._id) {
      return res.status(400).json({ message: "You can't access this notes" })
   }
   if (!IsNotes) {
      return res.status(400).json({ message: "Notes not found" });
   }
   try {
      res.status(200).json({ message: IsNotes })
   } catch (error) {
      res.status(400).json({ message: "Something went wrong" })
   }
}
const UpdatesNotesbyid = async (req, res) => {
   const { notesid } = req.params;
   const { title, description } = req.body;
   const Notesfind = await Notesmodel.findById(notesid);
   if (Notesfind.Userid != req.user._id) {
      return res.status(400).json({ message: "You can't access this notes" })
   }
   else if (!Notesfind) {
      return res.status(400).json({ message: "Notes not found" })
   }

try{
   if(req.file){
      await Notesmodel.findByIdAndUpdate(notesid, { title, description, Image: req.file.filename })
      res.status(200).json({ message: "Notes Update Successfully" })
   }
   if(!req.file){
      await Notesmodel.findByIdAndUpdate(notesid, { title, description})
      res.status(200).json({ message: "Notes Update Successfully" })
   }
   }
   catch (err) {
      res.status(400).json({ message: "Something went wrong", err })
   }

}


const getAllNotesbyadmin = async (req, res) => {

   try {
      const Allnotes = await Notesmodel.find()
      res.status(200).json(Allnotes)

   } catch (error) {
      res.status(400).json({ message: "something went wrong", err })
   }
}

const deleteAllNotesbyadmin = async (req, res) => {
   try {
      await Notesmodel.deleteMany();
      res.status(200).json({ message: "All notes deleted successfully" })
   }
   catch (err) {
      res.status(400).json({ message: "Something went wrong", err })
   }
}






module.exports = { createNotes, deleteNotes, getallnotesbyid, getsinglenotesbyid, UpdatesNotesbyid, getAllNotesbyadmin, deleteAllNotesbyadmin }
