const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Usage: node index.js <operation> <filename> [content/new_name]");
    console.log("Supported operations: read, delete, create, append, rename, list");
    process.exit(1);
}

const operation = args[0].toLowerCase();
const filePath = args[1];

switch (operation) {
    case 'read': {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log(`Error reading file: ${err.message}`);
                process.exit(1);
            }
            console.log("File Contents:\n", data);
        });
        break;
    }
    case 'delete': {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.log(`Error deleting file: ${err.message}`);
                process.exit(1);
            }
            console.log(`File '${filePath}' deleted`);
        });
        break;
    }
    case 'create': {
        fs.writeFile(filePath, '', (err) => {
            if (err) {
                console.log(`Error creating file: ${err.message}`);
                process.exit(1);
            }
            console.log(`File '${filePath}' created`);
        });
        break;
    }
    case 'append': {
        if (args.length < 3) {
            console.log("Usage: node index.js append <filename> <content>");
            process.exit(1);
        }
        const content = `\n${args.slice(2).join(' ')}`;
        fs.appendFile(filePath, content, (err) => {
            if (err) {
                console.log(`Error appending content: ${err.message}`);
                process.exit(1);
            }
            console.log(`Content appended to '${filePath}'`);
        });
        break;
    }
    case 'rename': {
        if (args.length !== 3) {
            console.log("Usage: node index.js rename <old_filename> <new_filename>");
            process.exit(1);
        }
        const newFilePath = args[2];
        fs.rename(filePath, newFilePath, (err) => {
            if (err) {
                console.log(`Error renaming file: ${err.message}`);
                process.exit(1);
            }
            console.log(`File '${filePath}' renamed to '${newFilePath}'`);
        });
        break;
    }
    case 'list': {
        fs.readdir(filePath, (err, files) => {
            if (err) {
                console.log(`Error listing directory: ${err.message}`);
                process.exit(1);
            }
            console.log("Files in directory:", files.join('\n'));
        });
        break;
    }
    default:
        console.log("Invalid operation. Supported operations: read, delete, create, append, rename, list");
        process.exit(1);
}
