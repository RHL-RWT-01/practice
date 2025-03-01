const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url === '/'){
        res.end('Welcome to the Home Page');
    }else if(req.url === '/about'){
        res.end('This is About Page');
    }else if(req.url === '/contact'){
        res.end('Contact us at contact@example.com');
    }else{
        res.end('404 - Page Not Found');
    }
})
server.listen(4500);