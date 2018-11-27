var socket = io();

socket.on('connect', function () {
    console.log('Connected to Server');

    socket.emit('createMessage', {
        from: 'andrew@example.com',
        text: 'Wanna go for drinks?'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from Server');
});

socket.on('newMessage', function (message) {
    console.log('Message received!', message);
});