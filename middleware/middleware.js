const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const middleware = express();
////////////////////////
// Middleware
////////////////////////
middleware.use(logger('dev'));
middleware.use(cors());
middleware.use(express.json());
middleware.use(express.urlencoded({extended: true}));


module.exports = middleware