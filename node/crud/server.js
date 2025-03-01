const http = require('http');
const data = require('./data');

const server = http.createServer((req, res) => {
    if(req.url=='/'){
        res.end('Welcome to our homepage');
    }else if(req.url=='/items'){
        res.end(JSON.stringify(data));
    }else if(req.url=='/items' && req.method=='POST'){
        const item =req.body;
        data.push(item);
    }else if(req.url.startsWith('/items/') && req.method=='PUT'){
        const id = Number(req.url.split('/')[2]);
        const item =req.body;
        const index = data.findIndex(i => i.id === id);
        data[index] = item;    
    }
    else if(req.url.startsWith('/items/') && req.method=='DELETE'){
        const id = Number(req.url.split('/')[2]);
        data = data.filter(i => i.id !== id);
    }

})

server.listen(3000)