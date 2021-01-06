const http = require('http');

// create a server onj
http.createServer((req, res) => {
    res.write('hello world');
    res.end();
}).listen(5000, () => console.log('server running...'))