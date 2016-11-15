// blog2jekyll.js
"use strict"

var consumeJSON = require('./js/consume_json.js');
var writePost = require('./js/write_post.js');

// Enter the host and path to your RESTful service.
var options = {
  host: '',
  path: '',
};
// The directory of your Jekyll blog posts.
var dir = ''

consumeJSON(options, function(err, posts) {
  if (err) return console.error('Error on consumeJSON: ', err);

  writePost(dir, posts, function(err, output) {
    if (err) return console.error('Error on writePost:', err);

    console.log(output);
  });
});
