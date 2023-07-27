// Create a web server
// We can create a web server by using the http module.
// The http module has functions to create an HTTP server that listens for requests.
// To include the http module, use the require() method:
// var http = require('http');
// Create a server object
// To create a server object, call the createServer() method of the http module:
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);
// The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
// Save the code above in a file called "demo_http.js", and initiate the file:
// Initiate demo_http.js:
// C:\Users\Your Name>node demo_http.js
// If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080/
// Read the Query String
// The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
// This object has a property called "url" which holds the part of the url that comes after the domain name:
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);
// If the address of the document above is http://localhost:8080/summer, the output will be /summer
// Split the Query String
// There are built-in modules to easily split the query string into readable parts, such as the URL module.
// Split the query string into readable parts:
// var http = require('http');
// var url = require('url');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);
// If you try to enter http://localhost:8080/?year=2017&month=July in your browser, your output will be: 2017 July
// Create a Node.js File