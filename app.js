const fs = require("fs")
const yargs = require("yargs")
const chalk = require("chalk")
const note = require("./notes.js")
yargs.command({
    command: "add",
    describe: "create a new file",
    builder: {
    title: {
        describe: "filename",
        demandOption: "true",
        type: "string"
    },
    body: {
        describe: "The file content",
        demandOption: "true",
        type: "string"
    }
 },
    handler( argv){
        note.addNote(argv.title,argv.body) 
    }
})
yargs.command({
    command: "remove",
    describe: "Removing a file",
    builder: {
        title: {
            describe: "filename",
            demandOption: "true",
            type: "string"
        }},
    handler(argv){
        note.removeNote(argv.title)
    }
})
yargs.command({
    command: "read",
    describe: "Reading a file",
    builder: {
        title: {
            describe: "filename",
            demandOption: "true",
            type: "string"
        }},
    handler(argv){
        note.readNote(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "show all availiable files",
    handler(){
        console.log("The list of the Titles:")
        note.listeNote()
    }
})



yargs.parse()
//console.log(yargs.argv)

















// console.log(chalk.red("successful"))
// const mss = chalk.green("hello people")
// fs.writeFileSync("hello.txt",mss)
//const action = yargs.argv[]
// if(action === "add"){
//     const name = process.argv[3]
//     const message = process.argv[4]
// fs.writeFileSync(name,message)
// }
// else if(action === "append"){
//     const name = process.argv[3]
//     const message = process.argv[4]
// fs.appendFileSync(name,message)
// }

// else if(action === "remove"){
//     const name = process.argv[3]
//     const message = process.argv[4]
// fs.FileSync(name,message)
// } 







