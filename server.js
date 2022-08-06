////////////////////////
// Server Dependencies
////////////////////////
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const connectDB = require('./config/connect');
const userRouter = require('./routes/user.js');
const middleware = require('./middleware/middleware.js');
////////////////////////
// Middleware
////////////////////////
app.use(middleware)
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