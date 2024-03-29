const mongoose = require('mongoose');
const colors = require('colors');

////////////////////////////
// Database Connection
////////////////////////////
const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.DATABASE_URL)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

module.exports = connectDB