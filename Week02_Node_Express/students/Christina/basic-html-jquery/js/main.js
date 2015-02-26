/* Your code starts here */

var app = {};

app.init = function() {
	console.log('APP INIT!!!!!');
	//Functions
	//Synchronous Function
	//can pass an argument into a fucntion
	var syncFunc = function(number) {
		var sum = 0;
		for (var i = 0; i < number; i++) {
			sum += i;
		}

		console.log(sum);
		//for synch function, you can return the result
		//via 'return'
		return sum;


	};
	//when call the function, this code below has 
	//already turned into the numnber
	var result = syncFunc(2460);
	console.log('the result is ' + result);

	// var asyncFunc = function(callback) {
	// 	setTimeout(function(){

	// 		var sum = 0;
	// 		for(var i = 0; i < 10; i++){
	// 		sum += i;

	// 	}
	// 	callback(sum);


	// 	}, 3000); // --> 3 secs


	// };

	// //var answer;
	// asyncFunc(function(result){
	// 	var result2 = process(result);
	// 	console.log(result2);


	// });
	//var answer = asyncFunc();
	//console.warn(answer);

	//lastly
	//creating a car blueprint or 'class'
	var Car = function(color, speed, nOfDoor) {
		this.color = color;
		this.speed = speed;
		this.nOfDoor = nOfDoor;

	};

	var myFirstCar = new Car('blue', 100, 6);
	console.log(myFirstCar);

};

$(window).on('load', function() {
	app.init()

});