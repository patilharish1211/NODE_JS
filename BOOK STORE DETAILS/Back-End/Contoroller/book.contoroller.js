
// Add Books
const express=require("express");
const BookModal = require("../Modal/Book.Modal");

const bookRoutes=express.Router()

bookRoutes.post('/addbooks', async (req, res) => {
    try {
      const { title, author, price, description ,ISBN , image } = req.body;
      const book = new BookModal({ title, author, price, description,ISBN,image });

      await book.save()
      res.status(201).json(book); 
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });


  // Get Books

  bookRoutes.get('/getbooks', async (req, res) => {
    try {
      const book = await BookModal.find(); 
      res.status(200).json(book);
      // res.json(book)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

  // Get User BY ID
  bookRoutes.get('/books/:id', async (req, res) => {
    try {
      const book = await BookModal.findById(req.params.id); // Retrieve user by ID
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  
  
  // UPDATE: Update a book by ID
  bookRoutes.patch('/book/:id', async (req, res) => {
    try {
      const { title, author, price, description, ISBN, image } = req.body;
      const user = await BookModal.findByIdAndUpdate(
        req.params.id,
        { title, author, price, description, ISBN, image },
       
      );
      res.status(200).json({message:"Book Detail's Updated !!"})
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  

  // DELETE: Delete a book by ID
  bookRoutes.delete('/book/:id', async (req, res) => {
    try {
      const user = await BookModal.findByIdAndDelete(req.params.id); 
     
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  module.exports=bookRoutes