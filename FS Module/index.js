// in order to use fs module we need a .txt file to read,
// update and delete data from it.



const fs = require('fs')

// if we use write method on same file twice the first data will be overriden


// ---CREATE  NEW FILE-------
// fs.writeFile("data1.txt", "new file created", (err, data) => {
//     console.log(data);
// })


fs.writeFileSync("Data3.txt", "data 3 file created")

//________________________________________________________________________//




// fs.readFile("data.txt", "utf-8", (err,data) => {

//     console.log(data);
// })

// Node.js program to demonstrate the
// fs.readFileSync() method

// Include fs module
// import fs from 'fs';

// // Calling the fs.readFile() method
// // for reading file 'input1.txt'
// fs.readFile('data.txt', "utf-8", (err, data) => {
//     console.log(data);
// })

// // Calling the fs.readFileSync() method
// // for reading file 'input2.txt'

// //when using read method the utf-8 should be specified otherwise we will get buffer data. and we also have to use the toString() method to convert 
// // the data to string
// const data = fs.readFileSync('./data.txt', 'utf8');

// // Display data
// console.log(data);



//_____________________________________________________________________________________//



// ---UPDATE EXISITING FILE-------//
 //to update a file without overriding it, use append method

//  fs.appendFileSync("data1.txt" ,"new data added in the data.txt file without overwriting existing data", "utf-8")




//______________________________________________________________________________________________//


 
// ---DELETE-------//
// fs.unlinkSync("final practice/bio.txt")