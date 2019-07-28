var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);
// WARNING: app.listen(80) will NOT work here!

io.on('connection', function (socket) {
    console.log('testing on message');
    socket.emit('message', { hello: 'world' });
    socket.on('message', function (data) {
        console.log(data);
        socket.emit('message', data + ' -> From Server');
    });
});
