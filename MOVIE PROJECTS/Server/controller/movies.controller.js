const MoviesModel = require("../Model/Movies.model");

const moviesCreate = async (req, res) => {
    const { title, genre,director,releaseYear,description } = req.body;
    if (!title || !genre || !director || !releaseYear || !description) {
        return res.status(400).json({ message: "Please Fill all information" });
    }

    const userID = req.user?._id; //optinal chaining
    if (!userID) {
        return res.status(401).json({ message: "User not authenticated" });
    }
    console.log("Authenticated user ID:", userID);

    try {
        await MoviesModel.create({ title, genre,director,releaseYear,description , userID });
        return res.status(200).json({ message: "Movie Created Successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const getAllMovies = async (req, res) => {
  
    try {
        const movies = await MoviesModel.find()
        if (!(movies.length) > 0) {
            return res.status(404).json({ message: "Movies Not Found" })
        }
        return res.status(200).json({ message: "Movies Get Successfully", movies })
        
    }
    catch (error) {
        return res.status(400).json({ message: error })
    }
}


const updateMovies=async(req,res)=>{
    const {movieID}=req.params
    try{
        const isExistNotes=await MoviesModel.findById(movieID)
        if(!isExistNotes){
            return res.status(404).json({ message: "Movie Not Found" })
        }
        
        if (isExistNotes.userID != req.user._id) {
            return res.status(403).json({ message: "You are not allowed to update this note" })
        }
        
            await MoviesModel.findByIdAndUpdate(movieID,req.body)
            res.status(200).json({message:"Movie Update SuccessFully"})

        
    }
    catch(error){
        return res.status(404).json({ message:error })
    }
    
}

const movieDelete = async (req, res) => {
    const { movieID } = req.params

    const isExistNotes = await MoviesModel.findById(movieID)
    if (!isExistNotes) {
        return res.status(404).json({ message: "Movie Not Found" })
    }

    if (isExistNotes.userID != req.user._id) {
        return res.status(403).json({ message: "You are not allowed to delete this note" })
    }

    await MoviesModel.findByIdAndDelete(movieID)
    return res.status(200).json({ message: "Movie Deleted Successfully" })
}


module.exports = { moviesCreate , getAllMovies ,movieDelete,updateMovies }
