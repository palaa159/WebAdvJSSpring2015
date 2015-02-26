//
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//console.log(__dirname);

//Serving static files at root "/"
app.use(bodyParser.urlencoded({
	extended: false

}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

//this route is going to send back the current weather condition
// app.get('/weather', function(request, response){
// 	var method = request.method;
// 	console.log(request);
// 	var currWeather = '20 F';
// 	response.json({
// 		status: 'ok',
// 		data: currWeather
// 	})

// });
// //use post mehtod for posting something
// app.post('/weather', function(request, response){
// 	console.log('Client has ' + request.method);
// 	console.log(request.query);
// 	response.json({
// 		status: 'ok',
// 		data: "I do not have anything to say"

// 	})

// });

var messages = [];
// example = {
// 	user: 'Christina',
// 	message: 'Feed me Cookies'
// }
//need two routes - one on server side, one for client
app.get('/message', function(req, res){
	res.json({
	data: messages

	});

});

app.post('/message', function(req, res){
	var dataFromClient = req.body;
	messages.push(dataFromClient);
	console.log(messages);
	res.json({
		success: true

	});
});




var PORT = 3000;
app.listen(PORT, function(){
	console.log('Express server is running at port;' + PORT);

});