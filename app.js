const validator = require('validator');
const chalk = require('chalk');
const fs = require('fs');
const os = require('os');
const utils = require('./utils');

// console.log('utils', utils);

// let user = os.userInfo();
// // fs.appendFile('greetings.txt', `\nHello ${user.username}!\n`, function(err) {
// //     if(err) {
// //         console.err('Unable to write to file');
// //     }
// // });
// fs.appendFileSync('greetings.txt', `\nHello ${user.username}!\n`);

// console.log(validator.isEmail('tabgasdf@yahoo.com'));

// console.log(chalk.green('Success!'));
// console.log(chalk.green.bold('Bold Success!'));
// console.log(chalk.green.bgRed.bold('Bold Success!'));
// console.log(chalk.green.bgRed.bold.inverse('Inverse Success!'));

// console.log(process.argv[2]);

const command = process.argv[2];

if(command === 'add') {
    console.log('Adding note!');
    console.log(process.argv);
} else if(command === 'remove') {
    console.log('Removing note!');
}