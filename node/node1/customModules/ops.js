const {add,subtract,divide,multiply} = require('./index.js');
const args = process.argv.slice(2); 

const a=args[0];

const b=args[1];
console.log(a,b)


console.log(subtract(a,b));

console.log(divide(a,b));

console.log(multiply(a,b));