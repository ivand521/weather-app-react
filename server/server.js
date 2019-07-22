const path = require('path');
const express = require('express');
const geocode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');

const app = express();
const publicPath = path.join(__dirname, '..', 'build');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address!'
    });
  }
  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecastData ,
        location,
        address: req.query.address
      });
    });
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(port, () => {
  console.log('Server is up on port ' + port);
})