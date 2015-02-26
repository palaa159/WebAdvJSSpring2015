/* Your code starts here */

/*var app = app || {};

app.main = (function() {
	var init = function() {
		// app starts running here
	};

	return {
		init: init
	};
})();

app.main.init();*/

var app = {};
 app.init=function(){
 	console.log('APP INIT!!!');
 	//function
 	//sync functions
 	var syncFunc = function(){
 	   var sum = 0;
 	   for (var i = 0; i<100; i++){
 	   	sum +=i;
 	   }
 	   console.log(i);
 	   //for sync function, you can return the result via "result"
 	   return sum;
 	}; 
 	var result = syncFunc();
 	console.log("the result is" + result);

 	var asyncFunc = function(){
      setTimeout(function(){
      	var sum = 0;
        for (var i = 0; i<100; i++){
 	   	sum +=i;
 	   }
 	    callback(sum);

 	   //return sum;
      }, 3000);
 	};
    
 	//var answer = asyncFunc();
 	//console.warn(answer);

 };

 /*var answer;
  asyncFunc(function(){
  	console.log(result);
  });*/ 

  //creating a Car blueprint or class
  var Car = function(color,speed,nOfDoor){
  	this.color=color;
  	this.speed=speed;
  	this.nOfDoor=nOfDoor;
  };
  var myFirstCar = new Car("blue", 100, 6);
  console.log(myFirstCar);
  


 $(window).on('load',function(){
 	app.init();
 });