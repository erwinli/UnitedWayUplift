  
var selectedFlag;
var merritt;
var kamloops;
var northThompson;
var cariboo;
var loganAshCache;

function initMap() {
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: 52.003118, lng: -122.070649},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  var borderColor = '#FF0000';
//Set coordinates for each region
  var allRegionCoord = [
new google.maps.LatLng(50.941123,-121.613159),
new google.maps.LatLng(50.767734,-121.613159),
new google.maps.LatLng(50.719069,-121.695557),
new google.maps.LatLng(50.663390,-121.780701),
new google.maps.LatLng(50.511680,-121.777954),
new google.maps.LatLng(50.348966,-121.783447),
new google.maps.LatLng(50.313900,-121.970215),
new google.maps.LatLng(50.169862,-122.115784),
new google.maps.LatLng(50.062429,-121.937256),
new google.maps.LatLng(50.030681,-121.821899),
new google.maps.LatLng(50.041266,-121.231384),
new google.maps.LatLng(49.984786,-121.184692),
new google.maps.LatLng(49.944150,-121.187439),
new google.maps.LatLng(49.908787,-121.231384),
new google.maps.LatLng(49.875168,-121.297302),
new google.maps.LatLng(49.848610,-121.300049),
new google.maps.LatLng(49.866317,-121.154480),
new google.maps.LatLng(49.592909,-121.159973),
new google.maps.LatLng(49.653405,-120.978699),
new google.maps.LatLng(49.747556,-120.967712),
new google.maps.LatLng(49.761752,-120.750732),
new google.maps.LatLng(49.907018,-120.357971),
new google.maps.LatLng(49.896404,-120.179443),
new google.maps.LatLng(49.908787,-120.028381),
new google.maps.LatLng(49.979488,-119.847107),
new google.maps.LatLng(50.073006,-119.761963),
new google.maps.LatLng(50.180416,-119.830627),
new google.maps.LatLng(50.234909,-119.759216),
new google.maps.LatLng(50.473239,-119.642487),
new google.maps.LatLng(50.777287,-119.632874),
new google.maps.LatLng(50.793783,-119.525757),
new google.maps.LatLng(50.820686,-119.521637),
new google.maps.LatLng(50.840636,-119.549103),
new google.maps.LatLng(50.841503,-119.605408),
new google.maps.LatLng(50.834565,-119.641113),
new google.maps.LatLng(50.824156,-119.701538),
new google.maps.LatLng(50.942854,-119.653473),
new google.maps.LatLng(51.287688,-119.278564),
new google.maps.LatLng(51.666593,-118.986053),
new google.maps.LatLng(52.385658,-118.907776),
new google.maps.LatLng(52.586363,-119.091797),
new google.maps.LatLng(52.726312,-120.080566),
new google.maps.LatLng(53.416080,-120.915527),
new google.maps.LatLng(53.375136,-122.428894),
new google.maps.LatLng(53.321030,-122.439880),
new google.maps.LatLng(53.301338,-123.305054),
new google.maps.LatLng(53.432447,-123.346252),
new google.maps.LatLng(53.435719,-124.985962),
new google.maps.LatLng(53.037910,-124.953003),
new google.maps.LatLng(53.034607,-126.469116),
new google.maps.LatLng(52.656394,-126.524048),
new google.maps.LatLng(52.466050,-125.370483),
new google.maps.LatLng(51.361492,-125.194702),
new google.maps.LatLng(51.027576,-124.074097),
new google.maps.LatLng(51.112144,-122.486572),
new google.maps.LatLng(50.941123,-121.624146)
];

  var merrittCoord = [
new google.maps.LatLng(50.428206,-121.780701),
new google.maps.LatLng(50.348747,-121.783447),
new google.maps.LatLng(50.313900,-121.970558),
new google.maps.LatLng(50.169642,-122.116470),
new google.maps.LatLng(50.061988,-121.937599),
new google.maps.LatLng(50.030460,-121.821899),
new google.maps.LatLng(50.041156,-121.231213),
new google.maps.LatLng(49.984345,-121.184521),
new google.maps.LatLng(49.944040,-121.187439),
new google.maps.LatLng(49.908787,-121.231213),
new google.maps.LatLng(49.875168,-121.297474),
new google.maps.LatLng(49.848388,-121.300135),
new google.maps.LatLng(49.866095,-121.154480),
new google.maps.LatLng(49.592464,-121.160316),
new google.maps.LatLng(49.652960,-120.978699),
new google.maps.LatLng(49.747556,-120.967369),
new google.maps.LatLng(49.761752,-120.750389),
new google.maps.LatLng(49.906991,-120.357928),
new google.maps.LatLng(49.896376,-120.179443),
new google.maps.LatLng(49.908787,-120.028338),
new google.maps.LatLng(49.979502,-119.847064),
new google.maps.LatLng(50.073006,-119.761877),
new google.maps.LatLng(50.180416,-119.830638),
new google.maps.LatLng(50.234895,-119.759227),
new google.maps.LatLng(50.416558,-119.670296),
new google.maps.LatLng(50.428206,-121.781387)
];

  var loganAshCacheCoord = [
new google.maps.LatLng(50.940258,-121.617279),
new google.maps.LatLng(50.767517,-121.613159),
new google.maps.LatLng(50.715644,-121.701393),
new google.maps.LatLng(50.663336,-121.780701),
new google.maps.LatLng(50.428206,-121.780701),
new google.maps.LatLng(50.421644,-120.620270),
new google.maps.LatLng(50.487618,-120.553665),
new google.maps.LatLng(50.544854,-120.459595),
new google.maps.LatLng(50.664261,-120.455475),
new google.maps.LatLng(50.798363,-121.098862),
new google.maps.LatLng(50.855012,-121.250267),
new google.maps.LatLng(50.932704,-121.405621),
new google.maps.LatLng(50.940258,-121.618652)
];

  var northThompsonCoord = [
new google.maps.LatLng(50.824156,-119.701366),
new google.maps.LatLng(50.942746,-119.653645),
new google.maps.LatLng(51.287635,-119.278564),
new google.maps.LatLng(51.666646,-118.985882),
new google.maps.LatLng(52.385449,-118.907776),
new google.maps.LatLng(52.586363,-119.091711),
new google.maps.LatLng(52.726338,-120.080566),
new google.maps.LatLng(51.284508,-121.368713),
new google.maps.LatLng(51.308422,-120.805664),
new google.maps.LatLng(50.824156,-119.701366)
];

  var caribooCoord = [
new google.maps.LatLng(50.940907,-121.624489),
new google.maps.LatLng(51.112144,-122.487259),
new google.maps.LatLng(51.027522,-124.074097),
new google.maps.LatLng(51.361492,-125.194874),
new google.maps.LatLng(52.465998,-125.370483),
new google.maps.LatLng(52.656394,-126.524048),
new google.maps.LatLng(53.034607,-126.469138),
new google.maps.LatLng(53.037859,-124.952917),
new google.maps.LatLng(53.435732,-124.985962),
new google.maps.LatLng(53.432472,-123.346210),
new google.maps.LatLng(53.301364,-123.304968),
new google.maps.LatLng(53.321005,-122.439837),
new google.maps.LatLng(53.375136,-122.428894),
new google.maps.LatLng(53.416093,-120.915506),
new google.maps.LatLng(52.726312,-120.080395),
new google.maps.LatLng(51.287102,-121.368628),
new google.maps.LatLng(50.940610,-121.612430),
new google.maps.LatLng(50.940691,-121.624146)
];

var kamloopsCoord = [
new google.maps.LatLng(50.940339,-121.612945),
new google.maps.LatLng(51.284241,-121.374207),
new google.maps.LatLng(51.314122,-120.796051),
new google.maps.LatLng(51.061906,-120.276260),
new google.maps.LatLng(50.824264,-119.701366),
new google.maps.LatLng(50.832260,-119.653258),
new google.maps.LatLng(50.841557,-119.605150),
new google.maps.LatLng(50.840690,-119.548931),
new google.maps.LatLng(50.820697,-119.521809),
new google.maps.LatLng(50.793783,-119.525757),
new google.maps.LatLng(50.777504,-119.633217),
new google.maps.LatLng(50.473130,-119.642401),
new google.maps.LatLng(50.416579,-119.670296),
new google.maps.LatLng(50.421751,-120.619926),
new google.maps.LatLng(50.487596,-120.553665),
new google.maps.LatLng(50.544809,-120.459251),
new google.maps.LatLng(50.664261,-120.455475),
new google.maps.LatLng(50.798278,-121.098862),
new google.maps.LatLng(50.854879,-121.249924),
new google.maps.LatLng(50.932613,-121.405449),
new google.maps.LatLng(50.940582,-121.613202)
];

  // Construct each regions polygon.
  var allRegion = new google.maps.Polygon({
    paths: allRegionCoord,
    strokeColor: borderColor,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  var merritt = new google.maps.Polygon({
    paths: merrittCoord,
    strokeColor: borderColor,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  var loganAshCache = new google.maps.Polygon({
    paths: loganAshCacheCoord,
    strokeColor: borderColor,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  var northThompson = new google.maps.Polygon({
    paths: northThompsonCoord,
    strokeColor: borderColor,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  var cariboo = new google.maps.Polygon({
    paths: caribooCoord,
    strokeColor: borderColor,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  var kamloops = new google.maps.Polygon({
    paths: kamloopsCoord,
    strokeColor: borderColor,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  //Region names for hover over 
  var merrittInfoWindow = new google.maps.InfoWindow();
  merrittInfoWindow.setContent("Merritt");
  merrittInfoWindow.setPosition(new google.maps.LatLng(50.421341, -120.810912));

  var loganAshCacheInfoWindow = new google.maps.InfoWindow();
  loganAshCacheInfoWindow.setContent("Logan Lake, Ashcroft, Cache Creek");
  loganAshCacheInfoWindow.setPosition(new google.maps.LatLng(50.771966, -120.941348));

  var northThompsonInfoWindow = new google.maps.InfoWindow();
  northThompsonInfoWindow.setContent("North Thompson");
  northThompsonInfoWindow.setPosition(new google.maps.LatLng(52.633621, -119.507735));

  var caribooInfoWindow = new google.maps.InfoWindow();
  caribooInfoWindow.setContent("Cariboo");
  caribooInfoWindow.setPosition(new google.maps.LatLng(53.306516, -122.544329));

  var kamloopsInfoWindow = new google.maps.InfoWindow();
  kamloopsInfoWindow.setContent("Kamloops");
  kamloopsInfoWindow.setPosition(new google.maps.LatLng(51.144328, -120.411280));

  //Set each polygon onto map
  //allRegion.setMap(map);
  merritt.setMap(map);
  loganAshCache.setMap(map);
  northThompson.setMap(map);
  cariboo.setMap(map);
  kamloops.setMap(map);

  //onClick
  google.maps.event.addListener(merritt, "click", function() {
    //TODO: display correct info when clicked
    document.getElementById('Merritt').style.display = 'block';
    document.getElementById('NorthThompson').style.display = 'none';
    document.getElementById('Ashcroft').style.display = 'none';
    document.getElementById('Cariboo').style.display = 'none';
    document.getElementById('Kamloops').style.display = 'none';
    
    selectedFlag = "merritt";
    checkSelected(selectedFlag);
  });

  google.maps.event.addListener(loganAshCache, "click", function() {
    //TODO: display correct info when clicked
    document.getElementById('Merritt').style.display = 'none';
    document.getElementById('NorthThompson').style.display = 'none';
    document.getElementById('Ashcroft').style.display = 'block';
    document.getElementById('Cariboo').style.display = 'none';
    document.getElementById('Kamloops').style.display = 'none';

    selectedFlag = "loganAshCache";
    checkSelected(selectedFlag);
  });

  google.maps.event.addListener(northThompson, "click", function() {
    //TODO: display correct info when clicked
    document.getElementById('Merritt').style.display = 'none';
    document.getElementById('NorthThompson').style.display = 'block';
    document.getElementById('Ashcroft').style.display = 'none';
    document.getElementById('Cariboo').style.display = 'none';
    document.getElementById('Kamloops').style.display = 'none';

    selectedFlag = "northThompson";
    checkSelected(selectedFlag);
  });

  google.maps.event.addListener(cariboo, "click", function() {
    //TODO: display correct info when clicked
    document.getElementById('Merritt').style.display = 'none';
    document.getElementById('NorthThompson').style.display = 'none';
    document.getElementById('Ashcroft').style.display = 'none';
    document.getElementById('Cariboo').style.display = 'block';
    document.getElementById('Kamloops').style.display = 'none';

    selectedFlag = "cariboo";
    checkSelected(selectedFlag);
  });

  google.maps.event.addListener(kamloops, "click", function() {
    //TODO: display correct info when clicked
    document.getElementById('Merritt').style.display = 'none';
    document.getElementById('NorthThompson').style.display = 'none';
    document.getElementById('Ashcroft').style.display = 'none';
    document.getElementById('Cariboo').style.display = 'none';
    document.getElementById('Kamloops').style.display = 'block';

    selectedFlag = "kamloops";
    checkSelected(selectedFlag);
  });

  //hover effect
  google.maps.event.addListener(merritt,"mouseover",function(){
    this.setOptions({fillOpacity: 0.6});
    merrittInfoWindow.open(map);
  }); 
  google.maps.event.addListener(merritt,"mouseout",function(){
    checkSelected(selectedFlag);
    merrittInfoWindow.close();
  });

  google.maps.event.addListener(loganAshCache,"mouseover",function(){
    this.setOptions({fillOpacity: 0.6});
    loganAshCacheInfoWindow.open(map);
  }); 
  google.maps.event.addListener(loganAshCache,"mouseout",function(){
    checkSelected(selectedFlag);
    loganAshCacheInfoWindow.close();
  });

  google.maps.event.addListener(northThompson,"mouseover",function(){
    this.setOptions({fillOpacity: 0.6});
    northThompsonInfoWindow.open(map);
  }); 
  google.maps.event.addListener(northThompson,"mouseout",function(){
    checkSelected(selectedFlag);
    northThompsonInfoWindow.close();
  });

  google.maps.event.addListener(cariboo,"mouseover",function(){
    this.setOptions({fillOpacity: 0.6});
    caribooInfoWindow.open(map);
  }); 
  google.maps.event.addListener(cariboo,"mouseout",function(){
    checkSelected(selectedFlag);
    caribooInfoWindow.close();
  });

  google.maps.event.addListener(kamloops,"mouseover",function(){
    this.setOptions({fillOpacity: 0.6});
    kamloopsInfoWindow.open(map);
  }); 
  google.maps.event.addListener(kamloops,"mouseout",function(){
    checkSelected(selectedFlag);
    kamloopsInfoWindow.close();
  });

function checkSelected(flag) {
  if (flag === "merritt") {
    merritt.setOptions({fillOpacity: 0.6});
    kamloops.setOptions({fillOpacity: 0.35});
    cariboo.setOptions({fillOpacity: 0.35});
    northThompson.setOptions({fillOpacity: 0.35});
    loganAshCache.setOptions({fillOpacity: 0.35});
  } else if (flag === "kamloops") {
    merritt.setOptions({fillOpacity: 0.35});
    kamloops.setOptions({fillOpacity: 0.6});
    cariboo.setOptions({fillOpacity: 0.35});
    northThompson.setOptions({fillOpacity: 0.35});
    loganAshCache.setOptions({fillOpacity: 0.35});
  } else if (flag === "cariboo") {
    merritt.setOptions({fillOpacity: 0.35});
    kamloops.setOptions({fillOpacity: 0.35});
    cariboo.setOptions({fillOpacity: 0.6});
    northThompson.setOptions({fillOpacity: 0.35});
    loganAshCache.setOptions({fillOpacity: 0.35});
  } else if (flag === "northThompson") {
    merritt.setOptions({fillOpacity: 0.35});
    kamloops.setOptions({fillOpacity: 0.35});
    cariboo.setOptions({fillOpacity: 0.35});
    northThompson.setOptions({fillOpacity: 0.6});
    loganAshCache.setOptions({fillOpacity: 0.35});
  } else if (flag === "loganAshCache") {
    merritt.setOptions({fillOpacity: 0.35});
    kamloops.setOptions({fillOpacity: 0.35});
    cariboo.setOptions({fillOpacity: 0.35});
    northThompson.setOptions({fillOpacity: 0.35});
    loganAshCache.setOptions({fillOpacity: 0.6});
  } else {
    merritt.setOptions({fillOpacity: 0.35});
    kamloops.setOptions({fillOpacity: 0.35});
    cariboo.setOptions({fillOpacity: 0.35});
    northThompson.setOptions({fillOpacity: 0.35});
    loganAshCache.setOptions({fillOpacity: 0.35});
  }
}
}