exports.homePage = (req,res,next)=>{
    //res.sendFile(path.join(rooPath,'views','home.html'));
    res.render('home',{pageTitle:"Home Page",layout:false});
}