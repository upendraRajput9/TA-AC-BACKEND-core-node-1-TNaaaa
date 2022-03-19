var http = require('http');
var fs= require('fs')
var url = require('url')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
  let parseURL = url.parse(req.url);
  let pathname = parseURL.pathname;
  // console.log(req.url.split('.').pop(),'pop')
  if(req.method==='GET' && req.url==='/'){
fs.createReadStream('./index.html').pipe(res)
  }else if(req.method==='GET' && req.url==='/about'){
fs.createReadStream('about.html').pipe(res)
  }
    else if(req.url.split('.').pop() === 'css') {
        // set header for css file
        res.setHeader('Content-Type', 'text/css');
        // read css file and send it in response
        fs.readFile('./' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }
      else if(req.url.split('.').pop() === 'jpg') {
        // set header for css file
        res.setHeader('Content-Type', 'image/jpg');
        // read css file and send it in response
        fs.readFile('./' + req.url, (err, content) => {
          if(err) return console.log(err);
          res.end(content)
        })
      }
}

server.listen(2000, () => {
    console.log('server listening a port 2000');
  });