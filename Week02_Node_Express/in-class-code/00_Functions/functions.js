// function declaration
var myFunction = function() {
    console.log('Frog jumps...');
    console.log('...Leafs wiggle');
};

function myOtherFunction() {

}

// two kinds of task (function)

var returnFunction = function(a, b, c) {
    var x = 10;
    var valueToReturn = 0;
    for (var i = 0; i < x; i++) {
        valueToReturn += i;
    }

    // return valueToReturn;
    return {
        valueToReturn: valueToReturn,
        a: a,
        b: b,
        c: c
    };
};

var something = returnFunction(10, 100, 1000);
console.log(something);

var asyncFunction = function(callback) {
    setTimeout(function() {
        // Will not work
        // return 'Task Executed';
        for (var i = 0; i < 10; i++) {
            callback(i);
        }
    }, 3000);
};

var message = asyncFunction(function(msg) {
    // when done
    console.log('The number is: ' + msg);
});

// A function as class constructor
var CuteAnimal = function(_name, _nOfLegs, _cuteness) {
	this.name = _name;
	this.nOfLegs = _nOfLegs;
	this.cuteness = _cuteness;
};

// Extend a class behavior
CuteAnimal.prototype.jump = function(height) {
	console.log(this.name + ' has jumped ' + height + ' ft. high.');
};

// Produce an instance from the contructor
var kitten = new CuteAnimal('Kitten', 4, 'Very cute');
kitten.jump(10);