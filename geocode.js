const requestUtil = require('./requestUtil');
const getWeather = require('./getWeather');

exports.geoCodeAddress = function geoCodeAddress(address) {
  requestUtil.requestHandler(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    (error, body) => {
      if (error) {
        console.log('Unable to connect.');
      } else if (body.status == 'OK') {
        let result = body.results[0];
        console.log(`Address: ${result.formatted_address}`);
        getWeather.getWeather(result.geometry.location.lat, result.geometry.location.lng);
      } else {
        console.log(body.status);
      }
    });
};
