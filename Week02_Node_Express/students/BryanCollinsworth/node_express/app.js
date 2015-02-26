
//npm install --save express
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//console.log(_dirname);

// serving statuc files at root "/":
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());
app.use('/website', express.static(__dirname + '/public'));

// Send back the current weathercondition
// do 'get' when you want information
// app.get('/weather', function(request, response){
// //var method = request.method;
// //console.log(request);
// var currWeather = '20 F';
// response.json({
// 		status: 'ok',
// 		data: currWeather
// 	});
//  });

// // // do 'post' when you want to post something
// app.post('/weather', function(request, response){
// 	var method = request.method;
// 	console.log('Client has ' + request.method);
// 	console.log(request.query);
// 	response.json({
// 		status: 'FINALLY',
// 		data: 'MOTHERFUCKER'
// 	});

// });

var messages = [];
// example = {
//	user: 'Joanna',
//	message: 'Please forgive me.'
// };

app.get('/message', function(req, res){
	res.json({
		data: messages,
		confirm: "This is from messages"
	});
});

app.post('/message', function(req, res){
	var dataFromClient = req.body;
	messages.push(dataFromClient);
	console.log(messages);
	res.json({
		//successMessage: 'You are Jesus!',
		message: messages,
		success: true

	});
});

// //Why ALL CAPS? a variable that won't change
var PORT = 3000;
app.listen(PORT, function(){
	console.log('Express server is running at port: ' + PORT);
});

