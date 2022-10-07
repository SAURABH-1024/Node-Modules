// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"content-Type":"text/plain"});
//     res.end("server created agaian")
// }).listen(8000, "127.0.0.1", () => {
//     console.log("server listening on port  8000");
// })



// require('http').createServer((req, res) => {
//     res.writeHead(200, {"content-Type":"text/plain"});
//     res.end("server created agaian")
// }).listen(8000, "127.0.0.1", () => {
//     console.log("server listening on port  8000");
// })



//how to create a server a read data from it..
//--------- how to read data from an api using node server ---------//

// const fs = require("fs");

// require('http').createServer((req, res) => {
//     if (req.url == "/") {
//         res.end("home")
//     }
//     else if (req.url == "/about") {
//         res.end("about page")
//     }
//     else if (req.url == "/read") {
//         fs.readFile("../HTTP server/userapi.json", "utf-8", (err, data) => {
//             const objData = JSON.parse(data)
//             res.end(objData[1].toString())
//             res.writeHead(200, { "content-type": "application/json" });
//             console.log(objData[1]);
//         })
//     } else {
//         res.writeHead(404, { "Content-Type": "text/html" })
//         res.end('<h1>Page not found</h1>')
//     }

// }).listen(8000, "127.0.0.1", () => {
//     console.log("server listening on port  8000");
// })


// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     if (req.url == "/") {
//         res.end("Home")
//     }
//     else if (req.url == "/About") {
//         res.end("About")
//     }
//     else if (req.url == "/userapi") {
//         fs.readFile("../FS Module/data.txt", "utf-8", (err, data) => {
//             // const objData = JSON.parse(data)
//             res.end(data);
//             res.writeHead(200, { "Content-type": "text/plain" });
//             console.log(data);
//         } )

//     }
//     else {
//         res.writeHead(404, { "content-type": "text/html" });
//         res.end("<h1>Page does not exist<h1/>")
//     }
// })
// server.listen(8000, "127.0.0.1", () => {
//     console.log("req recieved");
// })
const express = require('express');
const app = express()

app.get('/', (req,res,next) => {
    console.log("Hello world first");
}, (req, res) => {

  res.send('Hello World!')
})

app.listen(3000, () => {
    console.log("server created");
})