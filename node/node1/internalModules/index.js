const fs = require('fs');

function create1(){
    fs.writeFile('./masai.text','Hi This is Rahul Rawat , Learning Node',(e)=>{
        if(e) {
            console.error('Error:', e);
            return;
        };
        console.log('File Created');
    })
}
function create2(){
    fs.writeFileSync('./stl.text','Hi This is Rahul Rawat')
        console.log('File Created');
    
}

function read(){
    fs.readFile('./masai.text', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

function update(){
    fs.appendFile('./a.text','\n I am learning Backend', (err) => {
        if (err) throw err;
        console.log('Updated');
    });
}

create1();
console.log("Rahul")
create2();
read();
update();
