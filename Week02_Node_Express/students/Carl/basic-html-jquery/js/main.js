var app = {};

app.init = function() {
console.log('APP INIT!!');

//Functons
//Synchronous function
var syncFunc = function() {
	var sum = 0;
	for(var i = 0; i < 100; i++) {
		sum += i;
	}
	console.log(sum);
	// for sync function, you can return the result via return. 
	return sum;


}

var result = syncFunc();
console.log('theresult is ' + result);

var asyncFunc = function() {
	setTimeout(function() {
		console.log('one second passed');
	}, 1000);
};

asyncFunc();

};

$(window).on('load', function() {
	app.init();
});