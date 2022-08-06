const express = require('express');
const router = express.Router();
const signup = require('../controllers/usersignup.js');
const signin = require('../controllers/user.js');

////////////////////////////
// Authentication Routes
////////////////////////////
router.post("/signin", signin);
router.post("/signup", signup);

module.exports = router