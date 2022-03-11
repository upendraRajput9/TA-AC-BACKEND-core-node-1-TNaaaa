var http = require('http');
var fs = require('fs')

var server = http.createServer(handleRequest);
 function handleRequest(req,res){
     if(req.method==='GET' && req.url==='/file'){
         res.setHeader('Content-type','text/html');
         fs.readFile('./node.html',(err,content)=>{
             if(err) console.log(err);
             res.end(content)
         })
     }else if(req.method==='GET' && req.url==='/stream'){
        res.setHeader('Content-type','text/html');
        fs.createReadStream('./node.html').pipe(res)
    }
 }

 server.listen(5555,()=>{
     console.log('server listening on port 5555')
 })