var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var consolidate = require('consolidate');

app.engine('hbs', consolidate.handlebars);	//движком для шоблонов с расширением .hbs будет handlebars
app.set('view engine', 'hbs');	//чтобы не указывать расширение .hbs
app.set('views', 'hbs_views/');	//каталог с шаблонизаторами

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.post('/', function(req,res){
    console.log('POST: /');

    res.render('entrance');
});

io.on('connection', function (socket) {
    console.log('server connected! ', socket.id);

    socket.on('message', function(data){
        console.log(socket.id + ' : ' + data);

        socket.broadcast.emit('message', data);
    });

    socket.on('disconnect', function(reason){
        socket.disconnect(function(){
            console.log('disconnected!');
        });
    });
});



server.listen(3000);