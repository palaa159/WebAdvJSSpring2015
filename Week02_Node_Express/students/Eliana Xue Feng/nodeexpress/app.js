var express = require ("express");
var bodyParser=require("body-parser");
var app = express();

// Serving static files
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

//send back the current weather condition
/*app.get('/weather', function(request, response){
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
	console.log(request.query);
	response.json({
		status:"OK",
		data:"I dont have anything to say"
	});
});


var messages = [];
/*example = {
	user:"Apon",
	message:"Please forgive me"
};*/
app.get("/message", function(req, res){
   res.json({
   	data:messages
   });
});

app.post("/message", function(req, res){
   var dataFromClient = req.body;
   messages.push(dataFromClient);
   console.log(messages);
   res.json({
   	success:true
   });
});

//we use all caps 
var PORT = 3000;
app.listen(PORT, function(){
	console.log("express server is running at port:" + PORT);
});

