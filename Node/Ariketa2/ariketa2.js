var express= require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/bezeroa/index.html');
});

serv.listen(2000);