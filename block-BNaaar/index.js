// writeCode

// Create a basic http server which is listening on port 5k 

// 1. handle GET request on '/' and send 'Welcome to homepage' in response in plain text.
// 2. handle GET request on '/about' and send response 'this is all about NodeJS' using h2 tag in HTML.
// 3. handle POST request on '/about' and send json response `{message: this is a post request}`.


var http = require('http');
var url = require('url');

var server = http.createServer(handleRequest);
function handleRequest(req,res){
if(req.method==='GET' && req.url==='/'){
res.header('Content-Type','text/plain');
res.end('Welcome to homepage')
}else if(req.method==='GET' && req.url==='/about'){
    res.header('Content-Type','text/html');
    res.end(`<h2>this all about NodesJS</h2>`)
}else if(req.method==='POST'&& req.url==='/about'){
    res.json(`{message: this is a post request}`)
}
}

server.listen(5000,()=>{
    console.log('server listening on port 5000')
})