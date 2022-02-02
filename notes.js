const chalk = require("chalk")
const fs = require("fs")
const getNote = ()=> {  
 return "your notes ....."
 }


 const addNote =  (title,body)=>{
    const notes = loadNote()
    const duplicate = notes.filter((note)=> note.title === title
    )
 
    if(duplicate.length===0){
        notes.push({
            title: title,
            body: body 
            })
           savenote(notes)
           console.log(chalk.green("new note added"))
    } 
    else{
        console.log(chalk.red("Title taken"))
        }
  
 }
 const savenote = (notes)=>{
    const datajson = JSON.stringify(notes)
    fs.writeFileSync("notes.json",datajson)
 }
 const  loadNote = ()=>{
     try {
        const buffer = fs.readFileSync("notes.json").toString()
        return JSON.parse(buffer)  
     } catch (error) {
         return[]
     }

 }
 const removeNote = (title)=>{
    const notes = loadNote()
    const tokeep = notes.filter(function(note){
        return note.title !== title  

    })
    savenote(tokeep)
    if(tokeep.length===0){
     console.log(chalk.green("note removed"))

    } 
    else{
    console.log(chalk.red("note not found"))
    }
  
 }
 const listeNote = ()=>{
    const notes = loadNote()
    const thelist = notes.filter(function(note){
        console.log(note.title)
        //return note

    })
   //  console.log(thelist)  
 }
 const readNote = (title)=>{
    console.log(chalk.green(title)+":")
    const notes = loadNote()
    try {
        const toreadd = notes.find((note)=> note.title === title)
        console.log(toreadd.body)  
    } catch (error) {
        console.log(chalk.red("Note not found"))
    }

 }
  


 module.exports = {
getNote: getNote,
addNote: addNote,
removeNote: removeNote,
listeNote: listeNote, 
readNote: readNote
 }