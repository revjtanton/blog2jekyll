var fs = require('fs');

module.exports = function(dir, posts, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) return callback ('fs.readdir error: ' + err);

    posts.forEach(function (post) {
      var write_post = 1;
      // Change this to whatever you want your .md files to be named.  This is an example.
      var file_name = post.created + '-' + post.title.replace(' ', '-').toLowerCase() + '.md';

      // If you want to update older posts you can re-write this.  For my needs the past like 2 posts is good enough.
      // Management of the posts coming through is on your blog platform and the output of your feed from that.
      // My goal here was to limit the scope of what was being matched so it wouldn't go crazy over time.
      for (var i = files.length - 10;i  < files.length; i++) {
        if (files[i] == file_name) write_post = 0;
      }

      if (write_post > 0) {
        var content = fs.readFileSync('./templates/post_template.md').toString();

        // Change this to match what you changed in the template file.
        content = content.replace('{title}', post.title)
        .replace('{date}', post.created)
        .replace('{body}', post.body.replace(/(<([^>]+)>)/ig,''));

        // This writes the new post or updates a recent post!
        fs.writeFile(dir + file_name, content, function(err) {
          if (err) return callback('fs.writeFile error: ' + err);

          callback(null, 'Created post: ' + file_name);
        });
      } else {
        callback(null, 'Post already exists: ' + file_name);
      }
    });
  });
}
