console.log('Starting app.js...');

const fs = require('fs');
const os = require('os');


let user = os.userInfo();
fs.appendFile('greetings.txt', `\nHello ${user.username}!\n`, function(err) {
    if(err) {
        console.err('Unable to write to file');
    }
});