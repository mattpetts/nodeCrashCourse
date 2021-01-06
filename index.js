// const Person = require('./person');
// const person1 = new Person('Matt Petts', 28)
// person1.greeting();

// Include our logger class
const Logger = require('./Logger');
const fs = require('fs');
const path = require('path');

// Instantiate the class
const logger = new Logger();

// Set up the emitter
logger.on('message', data => {
    console.log(`Called Listener`, data)

    // append to log file
    fs.appendFile(path.join(__dirname, '/logs', 'logs.txt'), `${data.id}: ${data.msg}\n`, err => {
        if (err) throw err;
    });
});

// Call an event
logger.log('Hello World');

