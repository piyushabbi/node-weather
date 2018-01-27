const request = require('request');

exports.requestHandler = function requestHandler (url, callback) {
  request({
    url: url,
    json: true
  }, (error, response, body) => {
    callback(error, body);
  });
};
