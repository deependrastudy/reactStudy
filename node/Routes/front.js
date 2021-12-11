const express = require('express');
const path = require('path');
const routeFront = express.Router();
const front = require('../controllers/front');
const rooPath = require('../utils/path');
const adminRoute = require('./admin');
routeFront.get('/',front.homePage);
module.exports = routeFront;