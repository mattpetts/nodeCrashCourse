const path = require('path');

// Gets base file name
console.log(path.basename(__filename))

// Get dirname
console.log(path.dirname(__filename))

// Get file EXT
console.log(path.extname(__filename))

// Create Path Object
console.log(path.parse(__filename))

// Concat paths
console.log(path.join(__dirname, 'test', 'hello.html'))