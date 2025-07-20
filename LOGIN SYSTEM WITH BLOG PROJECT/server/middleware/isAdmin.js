const isAdmin = (req, res, next) => {
     if(req.user.role="admin"){
       return  next();
     }
     else{
        return res.status(401).send({message: "only admin can do this"});
     }


}
module.exports = isAdmin