var app = {};

app.init = function() {
	console.log('APP INIT!!!!!');
	//functions
	//synchronous function
	var syncFunc = function(number) {
		var sum = 0;
		for(var i = 0; i<number; i++){
			sum +=i;
		};
		// console.log(sum);
		// for sync function, you can return the result via 'return'
		return sum;
	};
	//assign variable to respresent function
	var result = syncFunc(2468);
	console.log('the result is '+ result);

	var asyncFunc = function(callback) {
		setTimeout(function(){

			var sum = 0;
			for(var i = 0; i<10; i++) {
				sum +=i;
			}
			callback(sum);
		}, 3000); // returns 3 sec
	};

	// var answer;
	// asyncFunc(function(result) {
	// 	var result2 = process(result);
	// 	console.log(result2);
	});

	var answer = asyncFunc();
	// console.warn(answer);

	//function can be a class constructor
	//creating a Car blueprint (aka class)
	var Car = function(color, speed, nOfDoors){
		this.color = color;
		this.speed = speed;
		this.nOfDoors - nOfDoors;
	};

	var myFirstCar = new Car('blue', 100, 6);
	console.log(myFirstCar);
};

//when the widown is loaded launch app.init
$(window).on('load', function() {
	app.init();
});