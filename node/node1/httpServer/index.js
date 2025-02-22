const http = require('http');
const fs = require('fs');
function createFile() {
    fs.writeFile('./masai.text', 'Hi This is Rahul Rawat , Learning Node', (e) => {
        if (e) {
            console.error('Error:', e);
            return;
        };
        return 'File Created';
    })
}
function readFile() {
    fs.readFile('./masai.text', 'utf8', (err, data) => {
        if (err) throw err;
        return data;
    });
}
const server = http.createServer((req, res) => {

    if (req.url == '/' && req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Hello World!',
        }));
    }
    else if (req.url == '/about' && req.method == 'GET') {
        createFile();
        let data = readFile();
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify({
            data
        }));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found API is not defind');
    }

});
server.listen(3003, (port) => { console.log('Server is running on port 3003') });