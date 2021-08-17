//definicion del servidor
const express = require('express');
const server = express();
const postsRouter = require('./routers/posts');
const usersRouter = require('./routers/users')
//middleware
server.use(express.json());
//routers
server.use("/posts",postsRouter);
server.use("/users",usersRouter);
module.exports = server;