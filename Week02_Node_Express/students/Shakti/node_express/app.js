var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// console.log(__dirname);

// serving static files at root "/"
app.user(bodyparser.urlencoded({
	extended: false
}));
app.use(bodyparser.json());
app.use('/', express.static(__dirname + '/public'));


var messages = [];
example = {
	user: 'Apon',
	message: 'Please forgive me.'
};

app.get('/message', function(req, res){
 	res.json({
 		data: messages
 	});

});

app.post('/message', function(req, res){
	var dataFromClient = req.body;
	messages.push(dataFromClient);
	res.json({
		success: true
	});
});




var PORT = 3000;
app.listen(PORT, function(){

	console.log('Express server is running at:' + PORT);

});
