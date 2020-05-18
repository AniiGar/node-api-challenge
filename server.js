const express = require('express');

const server = express();
const projectRouter = require('./data/routers/projectRouter');
const actionsRouter = require('./data/routers/actionRouter');

server.use(express.json());
server.use('/api/project', projectRouter);
server.use('/api/action', actionsRouter);

server.get('/', (req, res) => {
    res.json({message:'Server running'})
})

module.exports = server;