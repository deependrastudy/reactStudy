const fs = require('fs');

const routes=(req,res)=>{
    console.log("From Route");
    if(req.url==='/') {
        res.write("<html><head><title>Node Project</title><body><form action='/form-response' method='post'><input required type='text' name='name' placeholder='Name'><input required type='email' name='email' placeholder='Email'><button type='Submit'>Submit</button></form></body></html>");
        res.end();
    } else if(req.url==='/form-response') {
        let body=[];
        req.on("data",(chunk)=>{
            body.push(chunk);
        })
        req.on("end",()=>{
            let str = Buffer.concat(body).toString();
            let finaloutput = '';
            str.split('&').map((item)=>{
                let singleStr = item.split("=");
                finaloutput = finaloutput+' '+singleStr[1];
            })
            console.log("finaloutput",finaloutput);
            fs.writeFileSync("demo.txt",finaloutput)
        })
        res.statusCode = 302;
        res.setHeader("Location","/");
        res.end();
    } else {
        res.write(req.url);
        res.end();
    }   
}
module.exports = routes;