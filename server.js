let http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Goodbye, world!');
    
}).listen(process.env.PORT || 8080);