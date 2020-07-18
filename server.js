const express = require('express');

const server = express();
const helmet = require('helmet');
const logger = require('morgan');

const projectRouter = require('./data/routers/projectRouter');
const actionsRouter = require('./data/routers/actionRouter');

server.use(helmet());
server.use(logger('short'));
server.use(express.json());

server.use('/api/project', projectRouter);
server.use('/api/action', actionsRouter);

server.get('/', (req, res) => {
    res.json({message:'Server running'})
})

module.exports = server;