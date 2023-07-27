// Create web server
const http = require('http');
const server = http.createServer(function(req, res) {
     res.writeHead(200, { 'Content-Type': 'text/html' }); // text/plain
     res.write('<h1>Hello World</h1>');
     res.end();
     res.write('<h1>Hello World</h1>');
     res.end();
     res.end('<h1>Hello World</h1>');