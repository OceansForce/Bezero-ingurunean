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
//app.use('/client',express.static(__dirname + '/client'));
 
serv.listen(2000);
