const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/' && req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Hello World!',
        }));
    }
    else if (req.url == '/about' && req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'About Us Page',
        }));
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }

});
server.listen(3003, (port) => { console.log('Server is running on port 3003') });