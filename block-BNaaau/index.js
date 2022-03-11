//Q. create a basic node server
// - add a listener at port 8888
// - add appropriate header for json response
// - send json response({success: true, message: 'Welcome to Nodejs'})


var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req,res){

    res.writeHead(202,{'Content-Type':'application/json'});
   res.end(`{success: true, message: 'Welcome to Nodejs'}`)
}

server.listen(8888,()=>{
    console.log('server listening a port 8888')
})