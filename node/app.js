var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));

/*
 * Change the lat and lng coordincates to re-center the map on a new data set.
 * Chagne the json variable in the route to point to new GeoJSON data.
 */

app.get('/counties', function (req, res) {
  res.render('map', { mapTitle: 'counties', lat: '32.75', lng: '-97.25', zoom: '6', json: 'us_counties_mapshaper.json' });
});

app.get('/tarrant', function (req, res) {
  res.render('map', { mapTitle: 'Tarrant Tornadoes', lat: '32.75', lng: '-97.25', zoom: '10', json: 'result_tarrant_tornadoes.json' });
});

app.get('/100mi', function (req, res) {
  res.render('map', { mapTitle: '100mi Radius', lat: '32.75', lng: '-97.25', zoom: '8', json: 'result_tarrant_100mi_tonadoes.json' });
});

// app.get('/myurl', function (req, res) {
//   res.render('map', { mapTitle: 'myMapTitle', lat: 'myLatCenter', lng: 'myLngCenter', zoom: '8', json: 'myGeoJsonResult.json' });
// });

app.listen(3000, function () {
  console.log('Google Map API app listening on port 3000!');
});

