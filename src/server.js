//definicion del servidor
const express = require('express');
const server = express();
const postsRouter = require('./routers/posts');
const commentsRouter = require('./routers/comments');
//middleware
server.use(express.json());
//routers
server.use("/posts",postsRouter);
server.use("/comments",commentsRouter);

module.exports = server;