const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return loadNotes();
}

const findNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(n => n.title === title);

    if(note) {
        console.log(`${chalk.green.inverse(note.title)}`);
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('No note found.'));
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger

    if(!duplicateNote) {
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const removeNotes = notes.filter((note) => note.title !== title);

    if(removeNotes.length < notes.length) {
        saveNotes(removeNotes);
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const saveNotes = (notes) => {
    const notesStrJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesStrJsonAAAA);
    //fs.writeFileSync('notes.json', notesStrJson);
}

const listNotes = () => {
    const allNotes = loadNotes();
    console.log(chalk.blue.inverse('Your Notes:'));
    allNotes.forEach(element => {
        console.log(`- ${chalk.yellow(element.title)}`);
    });
}

const loadNotes =  () => {
    if (fs.existsSync('notes.json')) {
        try {
            const dataBuffer = fs.readFileSync('notes.json');
            const dataJSON = dataBuffer.toString();

            return JSON.parse(dataJSON);
        } catch (e) {
            // ignored
        }
    }

    return [];
}

module.exports = {
    getNotes: getNotes,
    findNote: findNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};