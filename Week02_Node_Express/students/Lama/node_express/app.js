var express = require('express');

var app = express();

// console.log(__dirname);

//serving static files
app.use('/website', express.static(__dirname + '/public'));

//send back the current weather condition
app.get('/weather', function(request, response){
	var method = request.method;
	console.log(request);
	var currWeather = '20 F';
	response.json({
		status: 'ok',
		data: currWeather,
	});

});

app.post('/weather', function(request, response){
	console.log('client has' + request.method);
	response.json({
		status: 'ok',
		data: 'hi',
	});

});

var PORT = 3000;
app.listen(PORT, function(){
	console.log('Express server is running at port'+'PORT');
});