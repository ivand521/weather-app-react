const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/ecec454afdfaafc84b541920febc2887/' + latitude + ',' + longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!');
    } else if (body.error) {
      callback('Unable to find location. Try again.')
    } else {
      const data = body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is ' +
      body.currently.precipProbability + '% chance of rain. The high for today is ' + 
      body.daily.data[0].temperatureHigh +
      ' degrees, with a low of ' + body.daily.data[0].temperatureLow + ' degrees.';

      callback(undefined, data);
    }
  })
}


module.exports = forecast;
