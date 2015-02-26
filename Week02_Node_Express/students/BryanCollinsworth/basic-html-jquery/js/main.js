var app = {};

app.init = function(){
	console.log('APP INIT!!!!!!!');
	//Functions
	// Synchronous function
	var syncFunc = function(number){
		var sum=0;
		for (var i=0; i<number; i++){
			sum += i;
		}
		console.log(sum);
		//for sync function, you can return the result via 'return'
		return sum;
	};

	var result = syncFunc(1256);
	console.log('the result is ' + result);


	//for async functions, need to callback, not return

	//'callback' is not reserved... could be 'cb' --> 'cb(result)'
	var asyncFunc = function(callback) {
		setTimeout(function(){
			console.log('three seconds passed');
			var sum = 0;
			for (var i=0; i<10; i++){
				sum += i;
			}

			callback(sum);

			//THIS IS NOT HEALTHY - NOT EASILY REUSABLE:
			// var result = sum;
			// var result2 = process(result);
			// var result3 = anotherProcess(result2);

		}, 3000);
	};

	//creating a car blueprint for a class... using 
	//function as CONSTRUCTOR for class

	var Car = function(color, speed, nOfDoor){
		this.color = color;
		this.speed = speed;
		this.nOfDoor = nOfDoor;
	};

	//this outputs an object instance of the class
	var myFirstCar = new Car('blue', 100, 6);
	console.log(myFirstCar);

	var answer;
	asyncFunc(function(result){
		console.log(result);
	});

	// var answer = asyncFunc();
	// console.warn(answer);
	//asyncFunc();

	//or:
	// function myAnotherFunc(){
	// };
};

//when window loads, fire app.init:
$(window).on('load', function() {
	app.init();
});


