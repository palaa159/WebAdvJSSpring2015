// sudo npm install --save express
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// console.log(__dirname);

// Serving static files at root "/"
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

// Send back the current weather condition 
// app.get('/weather', function(request, response) {
// 	var method = request.method;
// 	console.log(request);
// 	var currWeather = '20 F';
// 	response.json({
// 		status: 'ok',
// 		data: currWeather
// 	});
// });

// app.post('/weather', function(request, response) {
// 	console.log('Client has ' + request.method);
// 	console.log(request.query);
// 	response.json({
// 		status: 'ok',
// 		data: 'I do not have anything to say'
// 	});
// });

var messages = [];
// example = {
// 	user: 'Apon',
// 	message: 'Please forgive me.'
// };

app.get('/message', function(req, res) {
    res.json({
        data: messages
    });
});

app.post('/message', function(req, res) {
    var dataFromClient = req.body;
    messages.push(dataFromClient);
    console.log(messages);
    res.json({
        success: true
    });
});



var PORT = 3000;
app.listen(PORT, function() {
    console.log('Express server is running at port:' + PORT);
});