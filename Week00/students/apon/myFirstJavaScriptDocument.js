// String
var myString = 'This is my first JS line!!!';
// Number
var myNumber = 100;
var anotherNumber = 12.06666644;
// Boolean
var myBool = true; // or false

var myUnknownVariable;
// console.log(myUnknownVariable);
// Object
// var myObjectNotRecommend = new Object();
var designAndTechnology = {}; // Camel-case
// var HumanBeing = {};  // Pascal-case
// Pascal case is usually used to name constructors

designAndTechnology.floor = 12;
designAndTechnology.numberOfRooms = 10;
designAndTechnology.numberOfStudents = 200;
designAndTechnology.funniestMan = 'Kyle Li';

var superman = {
	realName: 'Clark Kent',
	outfit: 'Body suit',
	specialPower: [{
		name: 'Flying',
		power: 0
	}, {
		name: 'Laser Beam',
		power: 9999999
	}],
	age: 30,
	human: true
};

// console.log(superman.specialPower[1].power); // -> 99999999

// Array
var myArrayNotSoRecommended = new Array();
var myArray = [];
myArray = ['Apon', 'Kayla', 'Julie'];

// console.log(myArray[0]);

// Loops

for(var i = 0; i < myArray.length; i++) { // myArray.length -> 3
	// console.log(myArray[i]);
	// -> 'Apon'
	// -> 'Kayla'
	// ...
}

// Looping Object

var myAnotherObject = {
	apon: {
		foor: 'nar',
		baz: 'duck'
	},
	julie: 'huynh',
	'jung an': 'lin'
};

for(var k in myAnotherObject) {
	// console.log(k);
	// console.log(myAnotherObject[k].foor);  // --> nar
	// --> {foor: 'nar', baz: 'duck'}
	// --> 'undefined'
	// --> ..
}













