var express = require('express');

var app = express();

//Serving static files at rook "/"
app.use ('/', express.static(__dirname + '/public'));