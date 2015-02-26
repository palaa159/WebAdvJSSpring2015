var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
	extended: false
}));
//build static webserve, meaning we are building mamp. can serve images, CSS - typicals web files
app.use(bodyParser.json());


app.use('/', express.static(__dirname + '/public'));
//dirname is current directory
//app is instance of express server


//going to specify a route  - this one is going to send back current weather conditions - this is EXAMPLE

// app.get('/weather', function(request, response){
// 	//client request
// 	var method = request.method;
// 	console.log(request);
// 	console.log(request.query);
// 	var currWeather = '20 F';
// 	response.json({
// 			status: 'ok',
// 			data: currWeather
// 	});


// });


// //another route
// app.post('/weather', function(request,response){
// console.log ('client has request' + request.method);
// response.json({
// 	status: 'ok',
// 	data: 'got nothing'
// });

// });


var messages = [];

// example = {
// user: 'alex',
// message: 'kjsdghlkdjfhg'

// };


app.get('/message', function(req,res){
	res.json({
		data: messages
	});
});

app.post('/message', function(req,res){
	var dataFromClient = req.body;
	messages.push(dataFromClient);
	res.json({
		status: 'good job',


	});

});





var PORT = 3000;
app.listen(PORT, function(){
	console.log('express server is running at port' + PORT);

});

//if you change anything in node doc than you need to terminate instance unless using nodemon
