var http = require('http');
var server = http.createServer(handleRequest);
function handleRequest(request,respond){
respond.end(`Welcome`)
}
server.listen(4000,'localhost')