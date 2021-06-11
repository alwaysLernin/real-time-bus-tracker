// This array contains the coordinates for for Paul Revere's midnight ride!
const busStops = [    
    [-71.0536139, 42.3636667],
    [-71.0539031, 42.3633967],
    [-71.0539031, 42.3633967],
    [-71.0539031, 42.3633967],
    [-71.0540445, 42.3651811],
    [-71.0541796, 42.3664608],
    [-71.0541796, 42.3664608],
    [-71.0594472, 42.3670924],
    [-71.0619598, 42.3699754],
    [-71.0619598, 42.3699754],
    [-71.0619598, 42.3699754],
    [-71.0619598, 42.3699754],
    [-71.0618209, 42.3725075],
    [-71.0689588, 42.3747254],
    [-71.0745145, 42.380066],
    [-71.075867, 42.3837535],
    [-71.0889394, 42.3991078],
    [-71.0945278, 42.4063583],
    [-71.1086294, 42.4116028],
    [-71.1263348, 42.4144948],
    [-71.1263348, 42.4144948],
    [-71.1263348, 42.4144948],
    [-71.1258934, 42.414872],
    [-71.147024, 42.4172059],
    [-71.1609452, 42.4203176],
    [-71.1769182, 42.4257628],
    [-71.1769182, 42.4257628],
    [-71.1958861, 42.4281782],
    [-71.1958861, 42.4281782],
    [-71.195886, 42.4281782],
    [-71.2145213, 42.4389848],
    [-71.2145213, 42.4389848],
    [-71.2255071, 42.451492],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWx3YXlzbGVybmluIiwiYSI6ImNrcGx1OXhpNDF2MmsycHBpOTI0ZG8xd3EifQ.lgGncqYAJFuEAcedmHW-Aw';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: busStops[21],
    zoom: 11.5,
  });
  
  // markers for start and stop
  
 
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker = new mapboxgl.Marker()
    .setLngLat(busStops[0])
    .addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    counter++;
    map.jumpTo({ 'center': busStops[counter], 'zoom': 13 });
    marker.setLngLat(busStops[counter])
    .addTo(map);
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
  setTimeout(move,1000);
  }
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }