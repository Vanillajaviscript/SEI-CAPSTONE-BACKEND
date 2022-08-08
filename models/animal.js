const mongoose = require('mongoose');

////////////////////////////
// User Schema
////////////////////////////
const animalSchema = mongoose.Schema({
  title: String,
  name: String,
  type: String,
  description: String,
  image: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
  likeCount: {
    type: Number,
    default: 0,
  }
});

const animalModel = mongoose.model("Animal", animalSchema);

module.exports = animalModel;