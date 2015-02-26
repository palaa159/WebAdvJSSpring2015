var app = {};

app.init = function() {

	console.log('BOO');
	//Functions
	//Synchronous Function
	var syncFunc = function(number){
		var sum = 0;
		for (var i = 0; i < number; i++) {
			sum += i;
		}
		console.log(sum);
		//for sync function, you can return
		//the result via return
		return sum;

	};

	var result = syncFunc(32);
	console.log('the result is ' + result);

	// var asyncFunc = function(){
	// 	setTimeout(function(){

	// 		var sum = 0;
	// 		for (var i = 0; i < 10; i++) {
	// 			sum += i;
	// 		}

	// 		callback(sum);

	// 	}, 3000);
	// };

	// asyncFunc(function(result){
	// 	var result2 = process(result);
	// 	console.log(result2);
	// });

	var Car = function(color, speed, nOfDoors){

		this.color = color;
		this.speed = speed;
		this.nOfDoors = nOfDoors;

	};

	var myFirstCar = new Car('blue', 100, 6);
	console.log(myFirstCar)


};


$(window).on('load', function(){

app.init();

});



