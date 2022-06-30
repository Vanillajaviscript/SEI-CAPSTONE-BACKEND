////////////////////////
// Server Dependencies
////////////////////////
require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/connection')


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