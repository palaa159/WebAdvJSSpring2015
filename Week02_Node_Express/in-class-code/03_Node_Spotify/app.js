// What you are about to do is highly illegal.
// Take your own risk.
// Github: https://github.com/TooTallNate/node-spotify-web
// http://jsfiddle.net/JMPerez/p30pb38z/

var lame = require('lame');
var fs = require('fs');
var path = require('path');
var Speaker = require('speaker');

var Spotify = require('spotify-web');

var uri = process.argv[2] || 'spotify:track:0wPunL3lTXDPWQGkAKJqIz';

// Spotify credentials...
var username = 'aponp';
var password = (new Buffer('WiF4MmMzdjRiNQ==', 'base64')).toString();

Spotify.login(username, password, function(err, spotify) {
  if (err) throw err;
  // first get a "Track" instance from the track URI
  spotify.get(uri, function(err, track) {
    if (err) throw err;
    console.log('Downloading: %s - %s', track.artist[0].name, track.name);

    // play() returns a readable stream of MP3 audio data
    track.play()
      // .pipe(new lame.Decoder())
      // .pipe(new Speaker())
      .pipe(fs.createWriteStream(path.resolve(__dirname, 'download/' + track.artist[0].name + '_' + track.name + '.mp3')))
      .on('close', function() {
        console.error('done!');
      })
      .on('finish', function() {
        spotify.disconnect();
      });

  });
});

