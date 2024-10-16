//EXPRESS zerbitzariko fitxategiak errekuperatzeko erabiltzen da.
var express = require('express');
var app = express();
var serv = require('http').Server(app);

//Por defecto hau itzuliko du
app.get('/',function(req, res) {
	res.sendFile(__dirname + '/bezeroa/index.html');
});

//Bezeroaren karpetako kodea bakarrik itzultzen du, ez du zerbitzarikoa uzten.
//cliente karpetako URL sartzen bada, bai itzuliko lukela.
//app.use('/bezeroa',express.static(__dirname + '/bezeroa'));
 
serv.listen(2000); 

var i = 0;
var io = require('socket.io')(serv,{});
console.log("Zerbitzaria ireki da")

io.sockets.on('connection', function(socket){
	i++;
	console.log(i + ". konexioa")
	socket.id = i;
	socket.emit('ID',socket.id);


	socket.on('jasoDet',function(data){
		console.log(socket.id + " erabiltzaileak hau dio: " + data);
	});


}); 
