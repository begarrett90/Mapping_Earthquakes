// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// Coordinates for each point to be used in the line.
let line = [
    // LAX [33.9416, -118.4085],
    [37.6213, -122.3790],
    // SLC [40.7899, -111.9791],
    // SEA [47.4502, -122.3088]
    [30.1974292, -97.6663058],
    [43.6775, -79.6308333333],
    [40.641766, -73.780968]
  ];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    // color: "blue",
    dashArray: "blue",
    weight: 4,
    opacity: 0.5
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);