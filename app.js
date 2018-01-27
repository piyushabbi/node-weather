const yargs = require('yargs');

const geoCode = require('./geocode');
const getWeather = require('./getWeather');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

const encodedAddress = encodeURIComponent(argv.a);
geoCode.geoCodeAddress(encodedAddress);
