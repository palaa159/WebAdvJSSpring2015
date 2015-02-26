var express = require ("express");

var app = express();

// Serving static files
app.use('/', express.static(__dirname + '/public'));

//send back the current weather condition
app.get('/weather', function(request, response){
	var method = request.method;
	console.log(request);
	var currentWeather = '20 F';
	response.json({
        status:"ok",
        data: currentWeather
	});
});

app.post('/weather', function(request, response){
	console.log('client has'+ request.method);
});


//we use all caps 
var PORT = 3000;
app.listen(PORT, function(){
	console.log("express server is running at port:" + PORT);
});

