var express     = require('express');
var serveStatic = require('serve-static');
var fs          = require('fs');
var request     = require('request');
var bodyParser  = require('body-parser');
var app         = express();

app.use('/app', serveStatic(__dirname + '/app'));
app.use(bodyParser.json());

app.use(function (req, res, next) {
	fs.createReadStream('index.html').pipe(res);
});

app.listen(8080);

console.log('Server started: http://localhost:8080/');
