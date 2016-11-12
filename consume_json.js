var http = require('http');

module.exports = function(options, callback) {
  http.get(options, function(res) {
    res.setEncoding('utf8');

    var body = '';
    res.on('data', function(d) {
      body += d;
    });

    res.on('end', function() {
      try {
        var parsed = JSON.parse(body);
      } catch (err) {
        return callback('res.on parsing error: ' + err);
      }

      callback(null, parsed);
    });
  }).on('error', function (err) {
    callback('http.get error: ' + err);
  });
}
