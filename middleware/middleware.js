const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const app = express();
////////////////////////
// Middleware
////////////////////////
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


module.exports = middleware