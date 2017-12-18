var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    fs.ReadStream('../src/vk_enter.html').pipe(res);
});

io.on('connection', function (socket) {
    console.log('server connected! ', socket.id);

    socket.on('message', function(data){
        console.log(socket.id + ' : ' + data);

        io.emit('message', data);
    });

    socket.on('disconnect', function(reason){
        socket.disconnect(function(){
            console.log('disconnected!');
        });
    });
});



server.listen(3000);