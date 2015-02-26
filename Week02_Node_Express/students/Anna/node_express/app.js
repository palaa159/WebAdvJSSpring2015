// sudo npm install --save express
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

console.log(__dirname);

//serving static files at root "/"
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParse.json());
app.use('/', express.static(__dirname + '/public'));

// // send back the current weather condition 
// app.get('/weather', function(request, response){
//	var method = request.method;
//	console.log(request);
//	var currWeather = '20 F';
//	response.json({ //json object, specify stuff
//		status: 'ok',
//		data: currWeather
//	});
// });


// app.post('/weather', function(request, response){
//	console.log('Client has ' + request.method);
//	console.log(request.query);
//	response.json({
//		status: 'ok',
//		data: 'I dont know'
//	});
// });

var message = [];
// example = {''};

app.get('/message', function(req, res){
	res.json({
		data: messages
	});
});

app.post('/message', function(req, res){
	var dataFromClient = req.body;
	message.push(dataFromClient);
	console.log(messages);
	res.json({
		success: true
	});
});

var PORT = 3000; // all CAPS --> no change
app.listen(PORT, function(){
	console.log('Express server is running at port ' + PORT);
});

// terminal 
// npm init ------------->
// touch app.js
// npm install --save express
// nodemon app.js (ctrl c first)