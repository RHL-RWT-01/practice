const crypto = require('crypto');

// Retrieve command line arguments
const args = process.argv.slice(2);

if (args.length < 2 && args[0] !== 'random') {
    console.log("Usage: node calculator.js <operation> <num1> <num2> ...");
    console.log("Supported operations: add, sub, mult, divide, sin, cos, tan, random <length>");
    process.exit(1);
}

const operation = args[0].toLowerCase();

// Function to parse numbers from arguments
const parseNumbers = (arr) => arr.map(num => {
    const parsed = parseFloat(num);
    if (isNaN(parsed)) {
        console.log(`Invalid number: ${num}`);
        process.exit(1);
    }
    return parsed;
});

switch (operation) {
    case 'add': {
        const numbers = parseNumbers(args.slice(1));
        console.log("Result:", numbers.reduce((acc, num) => acc + num, 0));
        break;
    }
    case 'sub': {
        const numbers = parseNumbers(args.slice(1));
        console.log("Result:", numbers.reduce((acc, num) => acc - num));
        break;
    }
    case 'mult': {
        const numbers = parseNumbers(args.slice(1));
        console.log("Result:", numbers.reduce((acc, num) => acc * num, 1));
        break;
    }
    case 'divide': {
        const numbers = parseNumbers(args.slice(1));
        if (numbers.slice(1).includes(0)) {
            console.log("Error: Division by zero is not allowed.");
            process.exit(1);
        }
        console.log("Result:", numbers.reduce((acc, num) => acc / num));
        break;
    }
    case 'sin': {
        if (args.length !== 2) {
            console.log("Usage: node calculator.js sin <angle_in_radians>");
            process.exit(1);
        }
        const angle = parseNumbers([args[1]])[0];
        console.log("Result:", Math.sin(angle));
        break;
    }
    case 'cos': {
        if (args.length !== 2) {
            console.log("Usage: node calculator.js cos <angle_in_radians>");
            process.exit(1);
        }
        const angle = parseNumbers([args[1]])[0];
        console.log("Result:", Math.cos(angle));
        break;
    }
    case 'tan': {
        if (args.length !== 2) {
            console.log("Usage: node calculator.js tan <angle_in_radians>");
            process.exit(1);
        }
        const angle = parseNumbers([args[1]])[0];
        console.log("Result:", Math.tan(angle));
        break;
    }
    case 'random': {
        if (args.length !== 2) {
            console.log("Usage: node calculator.js random <length>");
            process.exit(1);
        }
        const length = parseInt(args[1]);
        if (isNaN(length) || length <= 0) {
            console.log("Invalid length for random number generation.");
            process.exit(1);
        }
        console.log("Random Bytes:", crypto.randomBytes(length).toString('hex'));
        break;
    }
    default:
        console.log("Invalid operation. Supported operations: add, sub, mult, divide, sin, cos, tan, random <length>");
        process.exit(1);
}