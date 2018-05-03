var http = require('http');
var path = require('path');
var express = require('express');
var app = express();



app.use(express.static(path.join(__dirname + "/dist")));

app.get('/', function(req, res, next) {
    res.sendFile(__dirname+"/dist/index.html");
});

app.get('/word', function(req, res, next) {
    var allWords = require(__dirname+"/dist/assets/slowa.json");
    var randomWord=allWords[Math.floor(Math.random() * 2745712)];

    res.send({word: randomWord.aa});
});

var allClients = [];

var server = http.createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){
    allClients.push(socket);
    io.emit('online', {online : allClients.length});


    socket.on('disconnect', function() {
        var i = allClients.indexOf(socket);
        allClients.splice(i, 1);
        io.emit('online', {online : allClients.length});
    });

    socket.on('new word', function(word){
        io.emit('new word', {word : word});
    });
});

server.listen(process.env.PORT || 3000);