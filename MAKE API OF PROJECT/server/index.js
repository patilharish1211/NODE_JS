require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/api', userRoutes);


connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
