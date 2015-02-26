// Basic Web Server + API

// We will need 'Express' module
var express = require('express');
// Refer our server to 'app'
// Reference at http://expressjs.com/api.html
// http://erichonorez.wordpress.com/2013/02/04/a-basic-web-server-with-node-js-and-express/
var app = express();

// very few methods being used here: .use and .get
// .use is a middleware
app.use(function(req, res, next) {
	// Setup a Cross Origin Resource sharing
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log('incoming request from ---> ' + ip);
	var url = req.originalUrl;
	console.log('### requesting ---> ' + url);
	next();
});

app.use('/', express.static(__dirname + '/public'));

// Routing a specific url
// http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
// app.get();
// app.post();

app.listen(3000, function() {
	console.log('Server running at port ' + 3000 + '. Ctrl+C to terminate.');
}); //the port you want to use