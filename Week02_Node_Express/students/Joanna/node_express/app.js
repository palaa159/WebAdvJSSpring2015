//sudo npm install --save express
//control c twice will terminate node server
//use nodemon

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//console.log(_dirname);

//pass json - parse application
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: false
}));
//serving static files at room "/"
//no extention for home
//double underscore for __dirname
app.use('/', express.static(__dirname + '/public'));

// //send back the current weather condition
// app.get('/weather', function(request, response){
// 	var method = request.method;
// 	console.log(request);
// 	var currWeather = '20 F';
// 	//object oriented
// 	response.json({
// 		status: 'ok',
// 		data: currWeather
// 	});
// });

// app.post('/weather', function(request, response){
// 	console.log(request.query);
// 	console.log('Client has ' +request.method);
// 		response.json({
// 		status: 'ok',
// 		data: 'I do not have anything to say'
// 	});
// });

var messages = [];
// example = {
// 	user: 'Joanna',
// 	message: 'Monkeys Monkeys Monkeys',
// };

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

	// var jsonArray = [];

	// for (var i = 0; i<len; i++){
	// 	var resultDiv = document.getElementById('resultDiv');
	// 	var result = document.createElement("p");
	// 	result.innerText = jsonArray[i];
	// }

});



//use all caps to refer to a variable that you are never going to change
var PORT = 3000;
app.listen(PORT, function(){
	console.log('Express server is running at port: ' +PORT);
});