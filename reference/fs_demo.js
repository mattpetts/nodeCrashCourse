const fs = require('fs');
const path = require('path');

// Create a folder - can be sycronous or async
fs.mkdir(path.join(__dirname, 'test'), {}, err => {
    if (err) throw err;
    console.log('folder created')
});

// Create and write to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
    if (err) throw err;

    // Append to a file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', err => {
        if (err) throw err;
    });

    console.log('file written')
});

// Read a file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
});

// Rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello-world.txt'), (err) => {
    if (err) throw err;
    console.log('File Renamed')
});
