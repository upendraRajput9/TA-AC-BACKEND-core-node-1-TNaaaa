var http = require('http');
var server = http.createServer(handleRequest)

function handleRequest(req,res){
    if(req.url.split('.').pop() === 'css') {
        // set header for css file
        res.setHeader('Content-Type', 'text/css');
        // read css file and send it in response
        fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }
}

server.listen(2000, () => {
    console.log('server listening a port 2000');
  });