const express = require('express');
const route = express.Router();
const path = require('path');
const rootpath = require('../utils/path');
let items = [];
route.get('/input',(req,res,next)=>{
    //res.sendFile(path.join(rootpath,'views','admin','input.html'));
    res.render('admin/input',{pageTitle:"Add New User"});
})
route.get('/list',(req,res,next)=>{
    //res.sendFile(path.join(rootpath,'views','admin','list.html'));\
    res.render('admin/list',{items:items,pageTitle:"Users List"});
});
route.post('/input',(req,res,next)=>{
    items.push({name:req.body.name,email:req.body.email});
    res.redirect('/admin/list');
})
exports.route = route;
exports.item = items;