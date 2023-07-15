const fs = require('fs')
const readline = require('readline')

const command = process.argv[2]
const fileName = process.argv[3]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function readFile() {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        err ? console.error('Error: ', err.message) : console.log('Content: ', data)
    })
}

function writeFile() {
    rl.question('Text content: ', (content) => {
        fs.writeFile(fileName, content, 'utf-8', err => {
            err ? console.error('Error: ', err.message) : console.log('File has been created!') 
        })
    })
}

switch (command) {
    case 'write': writeFile(); break
    case 'read': readFile(); break
    default: console.error('Invalid command')
}

rl.close()