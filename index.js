var app = require('express')();

var fs = require('fs');

var server = require('http').Server(app);

var io = require('socket.io')(server);

server.listen(80);

io.on('connection', function(socket){
    socket.on('chat.message', function(message){
        io.emit('chat.message', message);
    });
});
