const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const { removeNote, listNote } = require('./notes')
const notes = require('./notes')

// Create Add Command
yargs.command({
    command : 'Add',
    describe : 'Add a new note',
    builder : {
        title: {
            describe : 'note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove comand
yargs.command({
    command : 'Remove',
    describe : 'Remove a note',
    builder : {
        title: {
            describe : 'note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list comand
yargs.command({
    command : 'list',
    describe : 'list a note',
    handler : function(argv) {
        notes.listNote()
    }
})

//Create Read comand
yargs.command({
    command : 'Read',
    describe : 'Read a note',
    builder : {
        title: {
            describe : 'read note',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()