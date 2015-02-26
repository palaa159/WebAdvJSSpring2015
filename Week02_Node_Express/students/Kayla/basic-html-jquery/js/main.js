/* Your code starts here */

var app = {};

app.init = function() {
		console.log('APP INIT!!!');
		//FUNCTIONS
		//Synchronous funtion
		var syncFunc = function(number) {
			var sum = 0;
			for(var i =0; i < number; i++){
				sum += i;
			}
		//	console.log(sum);
			//for sync function, you can return 
			//the result via 'return'
			return sum;
		};
		var result = syncFunc(2468);
		console.log('the result is ' + result);

		var asyncFunc = function (callback) {
			setTimeout(function() {
				var sum = 0;
				for (var i=0; i < 10; i++){
					sum += 1;
				}

				callback(sum);
				// return sum;

				// console.log('one second passed');
			}, 3000); // --> 3 secs
		};
		// var answer = asyncFunc();
		// console.warn(answer);
	};

 $(window).on('load', function() {
 	app.init();
 });