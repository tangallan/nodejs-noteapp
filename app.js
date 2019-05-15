const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
const os = require('os');

const utils = require('./utils');
const notes = require('./notes');

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
// console.log(process.argv);

// const command = process.argv[2];

// if (command === 'add') {
//     console.log('Adding note!');
//     console.log(process.argv);
// } else if (command === 'remove') {
//     console.log('Removing note!');
// }

// console.log(process.argv);
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: argv => {
        notes.findNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List notes',
    builder: {},
    handler: () => {
        notes.listNotes();
    }
});

// add, remove, read, list
yargs.parse();
