var app = {}; //this is wrapper for whole app

app.init = function(){
	console.log('app init');
	//everything not time related (doesnt need programt o wait) is synchronous

	var syncFunc = function (number){
		var sum = 0;
		for(var i =0; i<number; i++){
			sum += i;
		}
		console.log(sum);
		//for sync function you can return the result via return
		return sum;
	};

		var result = syncFunc(100);
		console.log(result);



	var asyncFunc = function(callback){
		setTimeout( function() {

			var sum = 0;
			for(var i =0; i<number; i++){
				sum += i;
			}
			
			callback(sum);
			

		},3000); //it is delayed os cannot return result

	};	

	
	asyncFunc(function (result){
		console.log(result);

	});
	// var answer = asyncFunc();
	// asyncFunc();

	//creating car blueprint - CLASS
	var Car = function(color, speed, nOfDoor){
		this.color = color;
		this.speed = speed;
		this.nOfDoor = nOfDoor;

	};

	var myFirstCar = new Car('blue', 100, 6);
	console.log(myFirstCar);


};






$(window).on('load', function(){
	app.init();
});




