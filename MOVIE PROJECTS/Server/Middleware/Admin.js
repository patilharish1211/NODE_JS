const isAdmin=(req,res,next)=>{
    if(req.user.role!=="admin"){
        return res.status(400).json({ message: "You are not allowed to get all notes"})
    }
    next()
}

module.exports=isAdmin