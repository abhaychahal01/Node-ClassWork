// console.log(reqirem('module').wrapper);
// console.log(__filename);
// console.log(__dirname);


// I am using common JS
// File System

// Task 1--read file
const fs= require('fs');

// const data=fs.readFileSync('./input.txt');

// console.log(data.toString());  


// Task 2--we want to move data into 2 file
// fs.writeFileSync('./output.txt',data);

//add in input.txt add contend in file
// fs.appendFileSync('./input.txt','I am a Chitkara Student')

// Unlink remove the file
// fs.unlinkSync('./output.txt');

// without using Sync   in this we cannt write const
// fs.readFile('./input.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{

// fs.writeFile('./output.txt',data,(err)=>{
//     if(err){
//         console.log(err);
//     }

// })
//     }

// })


// append file read in input and write in output

// fs.appendFile('./input.txt',data)



// reading directory
// const files=fs.readdirSync('./');
// console.log(files);


// reading directory without using sync and return dirent that shows directory entry
// fs.readdir('./',{recursive:true,withFileTypes:true},(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(files);
//     }
// })

// const fs = require ('fs');


// PATH...
const path = require('path');
const filepath = path.join(__dirname,'index.js');
console.log(filepath);


