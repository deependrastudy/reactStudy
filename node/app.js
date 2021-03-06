const http = require('http');
const express = require('express');
const route = require('./Routes/admin');
const routeFront = require('./Routes/front');
//const expressHbs = require('express-handlebars');
const app  = express();
const path = require('path');

//app.engine('hbs', expressHbs.engine({layoutsDir:'views/layouts',defaultLayout:'main-layout',extname:"hbs"}));
app.set("view engine","ejs");
app.set("views","views");
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({"extended":"false"}));
app.use(routeFront);
app.use('/admin',route.route);
app.use(express.static(path.join(__dirname,'public')));
app.use((req,res,next)=>{
   // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
   res.status(404).render('404',{pageTitle:"404 Page",layout:false});
})
http.createServer(app).listen(5000);