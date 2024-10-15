var express= require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/bezeroa/index.html');
});

serv.listen(2000);

var io = require('socket.io')(serv,{});
    
io.sockets.on('connection', function(socket){
    i++;
    console.log(i + ". konexioa")
}); 