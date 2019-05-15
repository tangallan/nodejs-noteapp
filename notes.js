const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes...';
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });

    if(duplicateNotes.length === 0) {
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

const removeNote = function(title) {
    const notes = loadNotes();
    const removeNotes = notes.filter(function(note) {
        return note.title !== title;
    });

    if(removeNotes.length < notes.length) {
        saveNotes(removeNotes);
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const saveNotes = function(notes) {
    const notesStrJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesStrJson);
}

const loadNotes = function () {
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
    addNote: addNote,
    removeNote: removeNote
};