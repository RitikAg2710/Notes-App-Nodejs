const fs = require('fs')
const chalk = require('chalk')

const getnotes = function(){
    return 'this is my notes'
}

//add note function 

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title : title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("note added"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

//remove note function

const removeNote = function(title){
    const notes = loadNotes()
    const notestokeep = notes.filter(function (note){
        return note.title != title
    })

    if (notes.length > notestokeep.length) {
        console.log(chalk.green.inverse("note removed!"))
    } else {
        console.log(chalk.red.inverse("No note found!"))
    }

    saveNotes(notestokeep) 
}



// list note

const listNote = function() {

    const notes = loadNotes()

    console.log(chalk.green.inverse('your notes'))

    notes.forEach(function(note){
        console.log(note.title)
    })

}

// Read note

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.green.inverse(note.title))
        console.log(chalk.yellow.inverse(note.body))
    } else {
        console.log(chalk.red.inverse('note not found'))
    }
}


// savenotes

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


// loadnotes
const loadNotes = function() {
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


module.exports = {
    getnotes: getnotes,
    addNote : addNote,
    removeNote : removeNote,
    listNote : listNote,
    readNote : readNote
}