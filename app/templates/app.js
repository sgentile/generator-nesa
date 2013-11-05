
/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');
var path = require('path');
//add your api items here - see app.get below
var sample = require('./api/sample')(io);


// all environments
app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jshtml');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
//app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//app.engine('jshtml', require('jshtml-express'));
//app.set('view engine', 'jshtml');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.get('/api/sample', sample.get);

server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

io.sockets.on('connection', function (socket) {
    console.log('connected');
});
