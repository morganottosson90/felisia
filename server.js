var http = require('http');
var express = require('path');
var app = express();
var bodyParser = require('body-parser');

var cat = 1;

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Goodbye, world!');
    
}).listen(process.env.PORT || 8080);