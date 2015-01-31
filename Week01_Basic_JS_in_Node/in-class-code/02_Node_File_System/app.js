// Require
var fs = require('fs');

var dataToWrite = 'Banana singing';

// Read file
// fs.readFile --> Async
fs.readFile('files/fileToRead.txt', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        data = data.toString(); // convert to string
        console.log('Async: ' + data);
    }
});
// fs.readFileSync --> Sync
var readData = fs.readFileSync('files/fileToRead.txt');
readData = readData.toString(); // convert to string
console.log('Sync: ' + readData);

// Create new file
// fs.writeFile --> Async
fs.writeFile('files/fileToWrite.txt', dataToWrite, function(err) {
    if (err) {
        console.log('error');
    } else {
        console.log('Writing file Async: It is saved');
    }
});
// fs.writeFileSync --> Sync
// fs.writeFileSync
fs.writeFileSync('files/fileToWrite.txt', dataToWrite);

// Append to file (your turn!)
// fs.appendFile --> Async

// fs.appendFileSync --> Sync


