// express is a framework so we don't need to code http protocol from scratch
// documentation node express
//we must install the module
//go to termy
// - sudo npm install --save express
var express = require ('express');
var bodyParser = require ('body-parser');

var app = express(); 

//serving static files 
//use the root with '/'
// we are serving this static file under this directory name and under the public folder (can call it anything)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({
	extended: false
}));

app.use('/', express.static(__dirname + '/public'));

//we making an API
//LETS CREATE A ROUTE
//to specify a route - if we did "/balls" instead of "/"
//ROUTE SEND BACK THE CURRENT WEATHER CONDITION
//MUST HAVE REQUEST & RESPONSE AS ARGUMENTS IN THE CALLBACK FUNC
// app.get('/weather', function(request, response) {

// 	var method = request.method;
// 	// with the request you get all the information from the users client
// 	//IP address / cookies etc
// 	console.log(request);

// 	var currWeather = '20 F'; 
// 	response.json({
// 		status: 'ok',
// 		data: currWeather
// 	});
// });

// //post route
// app.post('/weather', function(request, response) {
// 	console.log("client has " + request.method);
//console.log(request.query); // allows you get data from the post 
// 	response.json({
// 		status: 'ok',
// 		data: "yo yo yo post is working"
// 	});
// });

//**********************creating a note taking app

//array to store all our messages
// it will look a bit like this
// example = {
// 	user: 'name',
// 	message: 'this is what I wrote'
// }
var messages = [];

app.get('/message', function(req, res){
	res.json({
		data: messages
	});
});

app.post('/message', function(req, res){
	var dataFromClient = req.body;
	//push the data into the array
	messages.push(dataFromClient);
	//respond to the client
	res.json({
		success: 'fuck yes'
	});
});

// there can be multiple routes to the same destination - 
//the Get and post defines which method is run
// use postman to check post - it allows you to make a call to your server

//all caps convention a variable you are not fucking changing
var PORT = 3000;
//listen has a callback function you can impliment
app.listen(PORT, function() {
	console.log("Express server is running at port:" + PORT);
});