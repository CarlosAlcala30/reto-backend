//definicion del servidor
const express = require('express');
const server = express();
const postsRouter = require('./routers/posts');
//middleware
server.use(express.json());
//routers
server.use("/posts",postsRouter);

module.exports = server;