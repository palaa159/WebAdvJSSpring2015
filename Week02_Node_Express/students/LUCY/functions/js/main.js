/* Your code starts here */

//wrapper for the app
var app = {};

app.init = function() {
	console.log("THE APP HAS FUCKING LOADED INIT!!!!!");
	//functions
	//synchronous function
	//anything that isn't time related it is synch i.e. we don't need the program to wait
	var syncFunction = function (number) {
		var sum = 0;

		for(var i =0; i< number; i++) {
			sum += i;
		}
		// console.log(sum);
		//for sync functions you can return the result
		// therefor you can assign the function to a var
		return sum;
	};

	var result = syncFunction(758);
	console.log("The result of the syncFunction sum is " + result);

	//async function
	//using the call back to return the results
	//which essentially you are passing a function into a function
	//doesnt have to say callback can be cb or what evs just need to make sure when you call it further down it matches
	var asyncFunction = function (callback) {
		//a function that delays a task
		setTimeout(function(){
			var sum = 0;

			for(var i =0; i< 20; i++) {
					sum += i;
			}

			callback(sum);

		}, 1000); // 1000 = 1 second
	};

	//YOU CANNOT DO THIS you want to do it in a callback function
	// var answer = asyncFunction();
	// console.log(answer);

	//so you need to call the async function which requires you to put the function in it
	asyncFunction(function(result) {
		console.log(result);
		//you can do shit in here too
		// var result2 = process(result);
	});

	//LASTLY
	//creating a car blueprint / class
	var Car = function(color, speed, nOfDoor) {
		//this allows you to inherit
		this.color = color;
		this.speed = speed;
		this.nOfDoor = nOfDoor;
	};

	var myFirstCar = new Car('red', 500, 1);
	console.log(myFirstCar);

};


$(window).on('load', function() {
	app.init();
});