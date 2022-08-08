const express = require('express');
const router = express.Router();
const userFunctions = require('../controllers/animal.js')
////////////////////////////
// CRUD Routes
////////////////////////////
router.post("/createanimal", userFunctions.createAnimal);
router.get("/getanimals", userFunctions.getAnimals);


module.exports = router