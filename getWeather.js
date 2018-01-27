const requestUtil = require('./requestUtil');

exports.getWeather = function getWeather(lat, lng) {
  requestUtil.requestHandler(`https://api.darksky.net/forecast/89ebd70826199614523455bb8685075d/${lat},${lng}`, (error, body) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Weather like: ', body.currently.summary);
      console.log(`Current Temperature: ${body.currently.temperature} F`);
    }
  });
}
