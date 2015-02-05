// Basic Web Server + API

// We will need 'Express' module
var express = require('express');
// To be able to decipher post request, we need to require body-parser
var bodyParser = require('body-parser');
// Refer our server to 'app'
// Reference at http://expressjs.com/api.html
// http://erichonorez.wordpress.com/2013/02/04/a-basic-web-server-with-node-js-and-express/
var app = express();

// very few methods being used here: .use and .get
// .use is a middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());
app.use(function(req, res, next) {
    // Setup a Cross Origin Resource sharing
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // console.log('incoming request from ---> ' + ip);
    // Show the target URL that the user just hit
    var url = req.originalUrl;
    console.log('### requesting ---> ' + url);
    next();
});

app.use('/', express.static(__dirname + '/public'));

// Routing a specific url
// http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
var messages = [];
// API test
app.get('/myApi', function(request, response) {
    var query = request.query;
    var msgToReply = {
        pong: 'You just ping the API. Welcome!, stranger.',
        pingMessage: query
    };
    response.json(msgToReply);
});
// Specify parameter
app.post('/myApi/message', function(request, response) {
    var body = request.body;
    console.log(body.name + ' says: ' + body.message);
    messages.push(body);
    response.json({
        status: 'ok',
        allMessage: messages
    });
});
app.get('/myApi/message/all', function(request, response) {

});
// get messages sent by specific username
// http://expressjs.com/api.html#request
app.get('/myApi/message/:username', function(request, response) {
    var username = request.params.username;
    // search array for name: username
    var itemsToSend = [];
    messages.forEach(function(item) {
        if(item.name === username) {
            itemsToSend.push(item);
        }
    });
    response.json({
        status: 'ok',
        items: items
    });
});
//
var PORT = 3000;
app.listen(PORT, function() {
    console.log('Server running at port ' + PORT + '. Ctrl+C to terminate.');
}); //the port you want to use