const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connnected');

    socket.emit('newEmail', {
        from: 'thakkarb97@gmail.com',
        text: 'Hey! Wanna have some beer',
        createdAt: 123
    });

    socket.emit('newMessage', {
        from: 'bhavik29',
        text: 'Wanna meet at 6',
        createdAt: 123456
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });

    socket.on('createMessage', (newMessage) => {
        console.log('New Message recieved!', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from Client');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`)
});