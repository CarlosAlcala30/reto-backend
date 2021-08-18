//definicion del servidor
const express = require('express');
const server = express();
const postsRouter = require('./routers/posts');
const usersRouter = require('./routers/users')
const commentsRouter = require('./routers/comments');
const authRouter = require("./routers/auth");
const cors = require('cors');
//middleware
server.use(cors())
server.use(express.json());
//routers
server.use("/posts",postsRouter);
server.use("/users",usersRouter);
server.use("/comments",commentsRouter);
server.use("/auth",authRouter);

module.exports = server;