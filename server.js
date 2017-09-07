var http = require('http');
let express = require('express')

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Goodbye, world!');
    
}).listen(process.env.PORT || 8080);