// var url = require('url')

// var address = "http://localhost:8000/default.html?year=2019&month=april"

// const q = url.parse(address, true)

// console.log(q.host); // localhost:8000
// console.log(q.pathname); // /default.html
// console.log(q.search); //?year=2019&month=april
// console.log(q.query);  // returns an object {year:2019, month:april}



// const url = require('url')

// const address = "http://localhost/default.html?year=2022&month=march"

// const a = url.parse(address, true)


const a = require('url').parse("http://localhost/default.html?year=2022&month=april", true)

console.log(a.host);
console.log(a.query);
console.log(a.search);
console.log(a.pathname);

