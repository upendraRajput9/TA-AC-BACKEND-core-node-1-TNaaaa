console.log('Welcome to Nodejs');
var os = require('os');
let cpus = os.cpus();
let freemem = os.freemem();
let uptime =os.uptime();
let osVersion = os.version();


let buff1 = Buffer.alloc(12);
buff1.write('Upendra rajput');
console.log(buff1.toString());

var {readFile , readFileSync} = require('fs');



var url = require('url')

var parseUrl = url.parse('https://airindia.com/fares/calculate?from=delhi&to=detroit',true)

console.log(parseUrl.query);
console.log(parseUrl.pathname);
console.log(parseUrl)

