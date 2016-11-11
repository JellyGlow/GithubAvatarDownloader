var request = require('request');
var fs = require('fs');


// https://github.com/JellyGlow/excercise_requestX
// these are already the two http string paths you'd want to
// tag onto the address as a ressource path

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
         throw err;
       })
  .on('response', function (response) {
         console.log('Response Status Code: %s, Content type: %s ', response.statusMessage, response.headers['content-type']);
       })
  .pipe(fs.createWriteStream('./future.jpg'));