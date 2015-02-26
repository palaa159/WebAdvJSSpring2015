var jf = require('jsonfile')

var file = 'data2.json'

setInterval(function(){
	var one=Math.floor((Math.random() * 1250) + 0);
	var two=Math.floor((Math.random() * 1250) + 0);
	var three=Math.floor((Math.random() * 1250) + 0);
	var four=Math.floor((Math.random() * 1250) + 0);
	var cone=Math.floor((Math.random() * 255) + 0);
	var ctwo=Math.floor((Math.random() * 255) + 0);
	var cthree=Math.floor((Math.random() * 255) + 0);
	var cfour=Math.floor((Math.random() * 255) + 0);
var obj = {
"name": "ayo",
"title": "music1",
"song": [{"pitch":one,"tap":cone},{"pitch":two,"tap":ctwo},{"pitch":three,"tap":cthree},{"pitch":four,"tap":cfour}],
"other data": {"other":1,"other2":2}
}

jf.writeFile(file, obj, function(err) {
  console.log(err)
})

},500);