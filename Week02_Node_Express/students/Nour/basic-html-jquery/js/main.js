var app = {};

app.init = function(){
console.log("APP INIT!");
//function
//synchronous function
var syncFunc = function(number){
	var sum = 0;
	for(var i=0; i<number; i++){
		sum += i;
	}
	console.log(sum);
	//for sync function, you can return result
	//via "return"
	return sum;
	};

	var result = syncFunc(2468);
	console.log('the result is ' + result);

	var asyncFunc = function(callback){
		setTimeout(function(){
			var sum = 0;
			for(var i = 0; i < 10; i ++){
				sum+=i;
			}
			//callback(sum);
			var result = sum;
			process

		}, 3000); // 3 secs
	};

	var answer;
	asyncFunc(function(result){
		var result2 = process(result);
	console.log(result2);
		
	});
};

$(window).on('load', function(){
	app.init();
})