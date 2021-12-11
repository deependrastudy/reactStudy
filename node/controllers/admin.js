let items = [];
exports.inputget = (req,res,next)=>{
    //res.sendFile(path.join(rootpath,'views','admin','input.html'));
    res.render('admin/input',{pageTitle:"Add New User"});
}
exports.input = (req,res,next)=>{
    items.push({name:req.body.name,email:req.body.email});
    res.redirect('/admin/list');
}
exports.list = (req,res,next)=>{
    //res.sendFile(path.join(rootpath,'views','admin','list.html'));\
    console.log("COntroller",items)
    res.render('admin/list',{items:items.reverse(),pageTitle:"Users List",dataState:items.length>0?true:false});
}