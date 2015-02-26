var app = {};

app.init = function() {
	console.log('APP INIT!!!!!');
	// Functions
	// Synchronous function
	var syncFunc = function(number) {
		var sum = 0;
		for(var i = 0; i < number; i++) {
			sum += i;
		}
		// console.log(sum);
		// for sync function, you can return 
		// the result via `return`
		return sum;
	};

	var result = syncFunc(2468);
	console.log('the result is ' + result);

	var asyncFunc = function(cb) {
		setTimeout(function() {

			var sum = 0;
			for(var i = 0; i < 10; i++) {
				sum += i;
			}
			// cb(sum);
			cb(sum);
		}, 3000); // --> 3 secs
	};

	// var answer;
	asyncFunc(function(result) {
		// var result2 = process(result);
		console.log(result2);
	});

	// var answer = asyncFunc();
	// console.warn(answer);

	// Lastly
	// creating a Car blueprint or class
	var Car = function(color, speed, nOfDoor) {
		this.color = color;
		this.speed = speed;
		this.nOfDoor = nOfDoor;
	};

	var myFirstCar = new Car('blue', 100, 6);
	console.log(myFirstCar);
};

$(window).on('load', function() {
	app.init();
});