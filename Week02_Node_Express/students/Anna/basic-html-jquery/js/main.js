var app = {}; // the wrapper of the whole app

app.init = function(){
	console.log('APP INIT');
	// function 
	// synchronous funciton 
	var syncFunc = function(number){
		var sum = 0;
		for(var i = 0; i < number; i++){
			sum += i;
			}
			//console.log(sum);
			// for sync function, you can return the result 
			// the result via return 
			return sum;
		};

		var result = syncFunc();
		console.log('the result is' + result);

		var asyncFunc = function(){
			setTimeout(function(){

				var sum = 0;
				for(var i = 0; i < 10; i++){
					sum += i;
				}
				//callback(sum);
				callback(sum);
			}, 3000); // 3 secs
		};

		//var answer;
		asyncFunc(function(result){
			var result2 = process(result);
			console.log(result2);
		});

		var Car = function(color, speed, n0fDoor){
			this.color = color;
			this.speed = speed;
			this.n0fDoor = n0fDoor;
		};
};

$(window).on('load', function(){
	app.init();
});
