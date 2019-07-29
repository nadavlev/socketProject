var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(3001, ()=>{console.log('listening for http req in port 3001')});

var ioServer = require('http').Server(express);
ioServer.listen(3000);
var io = require('socket.io')(ioServer);

//https://socket.io/docs/emit-cheatsheet/
io.on('connection', function (socket) {
    console.log('testing on message');
    socket.emit('message', { hello: 'world' });
    socket.on('message', function (data) {
        console.log(data);
        socket.emit('message', data + ' -> From Server');
    });
});

module.exports = express;
