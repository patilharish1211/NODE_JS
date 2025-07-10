const mongoose = require('mongoose');
require('dotenv').config()

const MONGOURL=process.env.MONGO_URL

    const connection =  mongoose.connect(MONGOURL);
    
   


module.exports = {connection} ;
