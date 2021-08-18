//definicion del servidor
const express = require('express');
const server = express();
const log = require('./middleware/log');

//middleware
server.use(express.json());
//server.use(log(request,response,next));

//routers


module.exports = server;