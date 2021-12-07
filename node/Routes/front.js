const express = require('express');
const path = require('path');
const routeFront = express.Router();
const rooPath = require('../utils/path');
const adminRoute = require('./admin');
routeFront.get('/',(req,res,next)=>{
    console.log('fsd',adminRoute.item)
    //res.sendFile(path.join(rooPath,'views','home.html'));
    res.render('home',{pageTitle:"Home Page"});
})
module.exports = routeFront;