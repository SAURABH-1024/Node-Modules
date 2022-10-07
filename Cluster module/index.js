



// // const express = require('express');
// // const app = express();
// // const cluster = require('cluster');
// // const os = require('os');


// // const numCpu = os.cpus().length


// // app.get('/', (req, res) => {
// //     for (let i = 0; i < 1e8; i++){
// // //
// //     }
// //     res.send(`okk ${process.pid}`)
// //     // cluster.worker.kill()
// // })

// // // if (cluster.isMaster) {
// // //     console.log(`Master ${process.pid} is running`);
// // //     for (let i = 0; i < numCpu; i++){
// // //         cluster.fork()
// // //     }
// // //     cluster.on("exit", (worker,code,signal) => {
// // //         console.log(`worker ${worker.process.pid} died`);
// // //         cluster.fork()
// // //     })
// // // } else {
// // //     app.listen(8080, () => {
// // //         console.log(`server ${process.pid} running at port 8080`);
// // //     })
// // // }

// // app.listen(8080, () => {
// //     console.log(`server running at port 8080`);
// // })





const express = require('express')
const cluster = require('cluster')
const os = require('os')
const app = express()


const numCpu = os.cpus.length

app.get('/', (req, res) => {
    for (let i = 0; i < 1e5; i++) {
        //
    }
    res.send(`okkkk ${process.pid}`)
    cluster.worker.kill()
})

if (cluster.isMaster) {
    for (let i = 0; i < numCpu; i++) {
        cluster.fork()
    }
    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork() //every time a worker dies new worker is created..last step
    })
} else {
    app.listen(8080, () => {
        console.log(`server ${process.pid} running at port 8080`);
    })
}

// app.listen(8080, () => {
//     console.log(`server running at port 8080`);
// })























// const express = require('express')
// const app = new express()
// const os = require('os')
// const cluster = require('cluster')

// const numCPU = os.cpus().length

// app.get("/", (req, res) => {

//     for (let i = 0; i < 79; i++) {
//         console.log(i);
//     }
//     res.send(`running fine`)
//     if (cluster.isMaster) {
//         for (let i = 0; i < numCPU; i++) {
//             cluster.fork()
//         }

//         cluster.on("exit", () => {
//             console.log(`worker ${worker.process.pid} died`);
//             cluster.fork()
//         })

//     } else {
//         app.listen(3000, () => {
//             console.log(`server running on port 3000`);
//         })
//     }


// })

// // app.listen(3000, () => {
// //     console.log(`server running on port 3000`);
// // })