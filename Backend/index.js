const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
require('dotenv').config();
const PORT = process.env.PORT || 1989;
const URI = process.env.MONGO_URL;
mongoose.connect(URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Connection error:', error);
  });
const userRouter = require('./routes/user.route')
app.use('/users', userRouter);
app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`)
})
