console.log('Welcome to Nodejs');
var os = require('os');
let cpus = os.cpus().length;
let freemem = os.freemem();
let uptime =os.uptime();
let osVersion = os.version();


let buff1 = Buffer.alloc(12);
buff1.write('Upendra rajput');
console.log(buff1.toString());

var {readFile , readFileSync,unlink} = require('fs');
var sync = readFileSync('./app.js');
readFile('./app.js',(err,content)=>{
    console.log(err,content.toString);
})



var url = require('url')

var parseUrl = url.parse('https://airindia.com/fares/calculate?from=delhi&to=detroit',true)

console.log(parseUrl.query);
console.log(parseUrl.pathname);
console.log(parseUrl)

