const express = require('express');
const route = express.Router();
const path = require('path');
const rootpath = require('../utils/path');
const adminController = require('../controllers/admin');
let items = [];
route.get('/input',adminController.inputget)
route.get('/list',adminController.list);
route.post('/input',adminController.input)
exports.route = route;
exports.item = items;