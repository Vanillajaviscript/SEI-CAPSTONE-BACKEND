const express = require('express');
const router = express.Router();
// const signup = require('../controllers/userSignup.js');
// const signin = require('../controllers/user.js');
// const googleSignin = require('../controllers/userGoogle.js');
const userFunctions = require('../controllers/user.js')
////////////////////////////
// Authentication Routes
////////////////////////////
router.post("/signin", userFunctions.signin);
router.post("/signup", userFunctions.signup);
router.post("/googlesignin", userFunctions.googleSignin);

module.exports = router