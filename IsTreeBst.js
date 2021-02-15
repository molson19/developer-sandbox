const { Server } = require('http');

const url = 'http://localhost:8080';
const connection = new WebSocket(url);

const server = new Server();