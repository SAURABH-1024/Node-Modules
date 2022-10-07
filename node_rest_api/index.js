// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 8000


// // middlewares

// app.use(cors());
// app.use(express.json())



// const DB = [{
//   id: '1',
//   task: "make an api"
// }]


// app.get('/api', (req, res) => {
//   res.json(DB)
// })


// // app.post("/post", (req, res) => {
// //   res.send(req.body)
// //   console.log(req.body);
// // })


// app.post("/api/post", (req, res) => {

//   const { task } = req.body


//   const newData = {
//     id: DB.length + 1,
//     task
//   }

//   DB.push(newData)

//   return res.json(DB)

// })


// app.delete("/api/:id", (req, res) => {
//   const { id } = req.params
//   const deletedIndex = DB.findIndex(item => item.id == id)

//   DB.splice(deletedIndex, 2)

//   return res.json(DB)
// })



// app.put("/api/:id", (req,res) => {
//   const { id } = req.params
//   const { task } = req.body;

//   const updatedIndex = DB.findIndex(item => item.id == id)
//   DB[updatedIndex].task = task;
//   return res.json(DB)
// })

// app.listen(port, () => {
//   console.log(`express server created at ${port}`);
// })





const express = require('express')
const cors = require('cors')
const app = express();
const port = 8001;


app.use(express.json(), cors());


const DB = [{
  "firstname": "saurabh",
  "lastname": "Ambesange"
}]


app.get('/api', (req, res) => {
  res.json(DB)
})


app.post("/api/post", (req, res) => {
  const { personalDetails } = req.body
  console.log(personalDetails);


  const newObj = {
    id: DB.length + 1,
    personalDetails
  }

  DB.push(newObj);
  return res.json(DB)

})


app.put("/api/:id", (req, res) => {
  const { id } = req.params
  const { task } = req.body;


  const updateDetails = DB.findIndex(item => item.id == id);
  DB[updateDetails].task = task;
  return res.json(DB)

})


app.delete("/api/:id", (req, res) => {
  const { id } = req.params

  const deletedIndex = DB.findIndex((item) => { item.id == id })

  DB.splice(deletedIndex, 2)

  return res.json(DB)

})


app.listen(port, () => {
  try {
    console.log(`server created and running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
})
