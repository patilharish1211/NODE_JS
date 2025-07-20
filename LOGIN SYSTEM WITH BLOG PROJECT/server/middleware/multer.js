const multer=require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Math.random()*10000)
    }
  })
  
  const upload = multer({ storage: storage })
  module.exports=upload