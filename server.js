////////////////////////
// Server Dependencies
////////////////////////
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const colors = require('colors');
const connectDB = require('./config/connect');
const logger = require('morgan');
const cors = require('cors');
const userRouter = require('./routes/user.js');

////////////////////////
// Middleware
////////////////////////
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/users", userRouter)
////////////////////////
// Server Listener
////////////////////////
const start = async () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server is live on port: ${PORT}`)
    })
  } catch(error) {
    console.log(`Catch error: ${error}`)
  }
};

start();