const express=require("express");
const Auth = require("../middleware/Auth");
const isAdmin=require("../middleware/isAdmin")
const { deleteNotes, createNotes, getallnotesbyid, getsinglenotesbyid, UpdatesNotesbyid, getAllNotesbyadmin, deleteAllNotesbyadmin } = require("../controler/notes.controler");
const upload = require("../middleware/multer");
const NotesRoute=express.Router();
NotesRoute.post("/create",Auth,createNotes)
NotesRoute.delete("/delete/:id",Auth,deleteNotes)
NotesRoute.get("/get/:Userid",Auth,getallnotesbyid)
NotesRoute.get("/getsingle/:notesid",Auth,getsinglenotesbyid)
NotesRoute.patch("/Update/:notesid",Auth,upload.single('file') ,UpdatesNotesbyid)
NotesRoute.get("/Allnotesget",Auth,isAdmin,getAllNotesbyadmin)
NotesRoute.delete("/deleteAllnotes",Auth,isAdmin,deleteAllNotesbyadmin)
module.exports=NotesRoute;
