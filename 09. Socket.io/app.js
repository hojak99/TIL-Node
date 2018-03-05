// Load Packages 
var express     = require('express');
var http        = require('http');
var path        = require('path');
var io          = require('socket.io');
var app         = express();

var routes = require('./routes')(app, io);
app.use(express.static(path.join(__dirname) + '/public'));
// Configure routes

var server = http.createServer(app).listen(8080, (requset, response) => {
    console.log('Socket IO server has been stated');
});

io = io.listen(server);
io.sockets.on('connection', function(socket) {
    socket.emit('toclient', {msg : 'welcome!'});
    socket.on('fromclient', function(data) {
        // 전체 연결된 소켓들을 대표하는 객체가 io.sockets 이다.
        // io.sockets.emit('이벤트명', function(data) {});      // 나를 포함한 모든 모든 클라에게 이벤트 보내기
        socket.broadcast.emit('toclint',data);      // 자신을 제외한 다른 클라이언트에게 보냄
        socket.emit('toclint', data);
        console.log('Message from client : '+data.msg);
    });
})
