/*

	To start building node application
	1. npm init
	2. hit return until done
	3. create a js document that holds the code
	4. to run app, simply run: node [doc_name].js
*/

// Node.js is a server-side language that its syntax is similar to browser's JavaScript
// check out example below:
console.log('--> app init');
var myString = 'Blah';
var anotherString = 'Hungarian music';
console.log(myString + ' ' + anotherString);

var this_month = new Date().getMonth();
// new Date().getMonth() return month as number from 0-11

if (this_month === 9) {
    console.log('this month is October');
} else {
    console.log('Well it is not October');
}

// Global Object
// console.log(__dirname);
// console.log(__filename);
setTimeout(function() {
    console.log('one second has passed');
}, 1000);

// console.log(os.cpus());


//––––––––––––––––––//
/*
Let's play with some cool built-in APIs
*/
//––––––––––––––––––//
var fs = require('fs');
/* fs = file system module
http://nodejs.org/api/fs.html
check out full documentation at http://nodejs.org/api/
*/

// create a file that contains text
// var data = 'Lorem ipsum Consectetur in ut reprehenderit.';
// fs.writeFile('output/output.txt', data, function(err) {
//     if (err) {
//         throw err;
//     } else {
//     	console.log('--> done writing a txt');
//     }
// });

// fs.readFile('output/output.txt', function(err, res) {
// 	console.log(res.toString());
// });

// let's create an api
var http = require('http');

var server = http.createServer(function(req, res) {
	if(req.url === '/login') {
		res.end('loggin you in');
	} else if(req.url === '/logout') {
		res.end('loggin you out');
	}
	// console.log(req.url);
});

server.listen(3000, function() {
	console.log('--> server listening to port: ' + 3000);
});

