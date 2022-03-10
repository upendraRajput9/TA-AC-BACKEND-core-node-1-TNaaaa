var http = require('http')
var server= http.createServer(handleRequest);

function handleRequest(req,resp){
console.log(req.header);
console.log(req.method,req.url);

resp.end('Welcome')
}

server.listen(3000,()=>{
    console.log(`server listening on port 3000`)
})