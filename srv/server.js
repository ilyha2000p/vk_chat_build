'use strict'

var express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs');
var consolidate = require('consolidate');
var mysql = require('mysql2');

app.engine('hbs', consolidate.handlebars);	//движком для шоблонов с расширением .hbs будет handlebars
app.set('view engine', 'hbs');	//чтобы не указывать расширение .hbs
app.set('views', 'hbs_views/');	//каталог с шаблонизаторами

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '9563',
    database: 'vk_chat'
});

connection.connect();

function saveAuthData(authData){
    connection.query('INSERT INTO `auth_data` VALUES (?,?);', [authData.login, authData.pass], function(err, results, fiels){
        if (err) console.log(err);
    });
}

app.use(express.static('../dist/'));

app.get('/', function(req, res){
    fs.ReadStream('../index.html').pipe(res);
});

app.post('/auth', function(req,res){
    console.log(req.body);
    saveAuthData(req.body);

    
    res.end();
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