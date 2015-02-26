//TERMINAL sudo npm install --save express

var express= require('express');
var bodyParser= require('body-parser');
var app=express();

//serving static server
app.use(bodyParser.unlencoder({
	extended:false;
}));
app.use(bodyParser.json());

app.use('/', express.static(__dirname+'/public'));

//send weather condition
// app.get('/weather', function(request, response){
// var method = request.method;
// console.log(request);
// var currWeather ='20f';
// response.json({
// 	status:'ok',
// 	data:currWeather
// });

// });

//posting
// app.post('/weather', function(request, response){
// console.log(request.method);
// response.json({
// 	status:'ok',
// 	data:'currWeather'
// });

// });
// end send weather condition

var messages =[];
// example = {
// 	user:'Ayo',
// 	message:'hello'
// };

app.get('/message',function(req,res){
res.json({
	data:message
});
});


app.post('/message',function(req,res){
	var dataClient=req.query;
	message.push(dataClient);
	res.json({
		success:'yes'
	});
	
});

var PORT =3000;

app.listen(PORT, function(){

console.log('EXPRESS RUNNING'+PORT);

});

