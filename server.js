// var path = require('path')
// var express = require('express')
// var jsonServer = require('json-server')
// const middlewares = jsonServer.defaults()

// const router = jsonServer.router('db.json') // Express router
// var server = jsonServer.create({limit: '50mb'})       // Express server

// server.use('/static', express.static(path.join(__dirname, 'public')))



// // Avoid CORS issue
// server.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// server.use(middlewares)
// server.use(router)

//  server.listen(4200, () => {
//    console.log('JSON Server is running')
//  })

var jsonServer = require('json-server')
var cors = require('cors')
const express = require('express')
const fileUpload = require("express-fileupload")
const router = jsonServer.router('db.json')
const path = require('path')
const PORT = 4200

/* let corsOptions = {
    origin : ['http://localhost:3000'],
} */

/* const localtunnel = require('localtunnel');
(async () => {
  const tunnel = await localtunnel({ port: 4200 });
  console.log(tunnel.url)
  tunnel.on('close', () => {
    // tunnels are closed
  });
})(); */

const app = express()
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload())
app.use(cors())
app.use(router)


//Avoid CORS issue
 app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

  app.listen(PORT, () => {
    console.log('JSON Server is running')
  })
