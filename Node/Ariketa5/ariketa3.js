var express= require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/bezeroa/index.html');
});

serv.listen(2000);

var i = 0;
var io = require('socket.io')(serv,{});
console.log("Zerbitzaria ireki da")

io.sockets.on('connection', function(socket){
	i++;
	console.log(i + ". konexioa")
	
socket.id
 = i;
	socket.emit('ID',
socket.id
);
}); 