const EventEmmiter = require('events');
const uuid = require('uuid');

class Logger extends EventEmmiter {
    log(msg) {
        // Call Event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

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

module.exports = Logger;
