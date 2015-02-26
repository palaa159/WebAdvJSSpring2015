var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var WebSocketServer = require('websocket').server;
var MongoClient = require('mongodb').MongoClient;
//var piblaster = require("pi-blaster.js");
var jf = require('jsonfile');
var util = require('util');
var file = 'data2.json';
var url = require('url'); 
var port = 2000;
var url='localhost';
var server = app.listen(port);
var name=";"

// var url_parts = url.parse(request.url, true);
// var query = url_parts.query;

var databaseUrl = 'mongodb://127.0.0.1:27017/drum'; // "username:password@example.com/mydb"
var db = require("mongojs").connect(databaseUrl);
var collection = db.collection("test");

var io = require("socket.io").listen(server);
var count=500;
var u = 0;

app.use(express.static(__dirname + '/'));



console.log('Simple static server listening at '+url+':'+port);


 io.sockets.on('connection', function (socket) {



 


setInterval(function(){


//console.log(query)

  jf.readFile(file, function(err, obj) {
  file = 'data2.json'
  //console.log("count")
  //console.log(obj.song[0])
  //socket.emit('latLon', obj);
  //console.log(util.inspect(obj.song[0].tap))
  // console.log(util.inspect(jf.readFileSync(file).name))

//   collection.find({name: "name"}, function(err, document) {
//   //console.log(document);
socket.on('toSearch', function (data) {
    console.log(data.q);
     name = data.q;
  
  });


var title =obj.title;
 var one =obj.song[0].pitch;
 var two =obj.song[1].pitch;
 var three =obj.song[2].pitch;
 var four =obj.song[3].pitch;

  var cone =obj.song[0].tap;
 var ctwo =obj.song[1].tap;
 var cthree =obj.song[2].tap;
 var cfour =obj.song[3].tap;


var objD = {
"name": name,
"title": "music1",
"song": [{"pitch":one,"tap":cone},{"pitch":two,"tap":ctwo},{"pitch":three,"tap":cthree},{"pitch":four,"tap":cfour}],
"other data": {"other":1,"other2":2}
}


collection.insert(objD, function(err, saved) {
            if (err || !saved) console.log("can not saved");
            else console.log("can saved");
          });



  collection.find({
            title: "music1"
          }).toArray(function(err, items) {
            var s = items.length;
            var lastItem = items[s - 1];
            console.log(u);
            u++;
            
            console.log(lastItem.name);
            //console.log("");
            io.emit('latLon', lastItem);
          });
 
});


// collection.insert(obj, function(err, saved) {
//             if (err || !saved) console.log("can not saved");
//             else console.log("can saved");
//           });



  


  //console.log(obj.song[0]);
  // console.log(obj.song[1]);
  // console.log(obj.song[2]);
  // console.log(obj.song[3]);

 
        //socket.emit('latLon', objD);     


// });

},2000);

});










function readfile () {
    //timer.start();
    setTimeout(console.log("P"),1000);
}

function writefile () {
    // timer.stop();
  //   jf.readFile(file, function(err, obj) {
  // file = 'data2.json'
  // console.log(util.inspect(jf.readFileSync(file).name))
  // console.log(util.inspect(obj.song[0].tap))
  console.log("P")

// })
}



