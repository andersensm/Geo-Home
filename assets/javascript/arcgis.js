var map = ''
var mapView = ''
var lastLat = ''
var lastLong = ''
var lastZoom = ''

$(function () {
  $('[data-toggle="popover"]').popover()
})

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/request",
  "esri/layers/FeatureLayer",
  "esri/layers/MapImageLayer",
  "esri/widgets/Legend",
  "dojo/domReady!"
], function(Map, MapView, esriRequest, FeatureLayer, MapLayer, Legend) {
  map = new Map({
    basemap: "streets-night-vector",
  });
  mapView = new MapView({
    container: "mapView", // Reference to the scene div created in step 5
    map: map, // Reference to the map object created before the scene
    zoom: 10, // Sets zoom level based on level of detail (LOD)
    center: [-77.0369, 38.9072]// Sets center point of view using longitude,latitude
  });

/*
  $("#mapView").on("mouseover", function () {
    lastLat = mapView.center.latitude
    lastLong = mapView.center.longitude
    lastZoom = mapView.zoom

    console.log("current latitude, longitude, zoom", lastLat, lastLong, lastZoom)
    mapView.center = [lastLat, lastLong]
    mapView.zoom = lastZoom

  })
*/

  var url = "https://server.arcgisonline.com/arcgis/rest/services/Demographics?f=pjson";
  var responseType = {
    responseType: "json"
  }

  esriRequest(url, responseType).then(function(response) {
    // The requested data
    var geoJson = response.data;
    console.log(geoJson)

    var demographicsLst = document.getElementById("demographics")
    for (var i = 0; i < geoJson.services.length; i++) {

        var options = document.createElement("option")
        options.textContent = geoJson.services[i].name
        demographicsLst.appendChild(options)

    }
    var legend = new Legend({view:mapView})
    mapView.ui.add(legend, "bottom-right")

    demographicsLst.addEventListener("change", function() {

      var selectedDemo = demographicsLst.options[demographicsLst.selectedIndex].textContent
      var popDensLyr = new MapLayer({
        url: "https://server.arcgisonline.com/arcgis/rest/services/" + selectedDemo + "/MapServer",
        opacity: 0.5
      })
        map.removeAll()
        map.add(popDensLyr)
      })


    /*
    var Renderer = {
    type: "simple",
    field: "POPDENS_CY",
    classBreakInfos: [
    {
      minValue: 0,
      maxValue: 1000,
      symbol: {
        type: "simple-fill",  // autocasts as new SimpleFillSymbol()
        color: 'red',
        style: "solid",
        outline: {  // autocasts as new SimpleLineSymbol()
          color: "white",
          width: 1
        },
        label: "100 or less people"
      },
        minValue: 1001,
        maxValue: 10000,
        symbol: {
          type: "simple-fill",  // autocasts as new SimpleFillSymbol()
          color: 'green',
          style: "solid",
          outline: {  // autocasts as new SimpleLineSymbol()
            color: "white",
            width: 1
          },
          label: "1001 to 10000 people"
      },
        minValue: 10001,
        maxValue: 25000,
        symbol: {
          type: "simple-fill",  // autocasts as new SimpleFillSymbol()
          color: 'blue',
          style: "solid",
          outline: {  // autocasts as new SimpleLineSymbol()
            color: "white",
            width: 1
          },
          label: "10001 to 25000 people"
      },
        minValue: 25001,
        maxValue: 100000,
        symbol: {
          type: "simple-fill",  // autocasts as new SimpleFillSymbol()
          color: 'purple',
          style: "solid",
          outline: {  // autocasts as new SimpleLineSymbol()
            color: "white",
            width: 1
          },
          label: "25001 to 100000 people"
      },
        minValue: 100001,
        maxValue: 614375,
        symbol: {
          type: "simple-fill",  // autocasts as new SimpleFillSymbol()
          color: 'white',
          style: "solid",
          outline: {  // autocasts as new SimpleLineSymbol()
            color: "white",
            width: 1
          },
          label: "100001 to 614375 people"
          }
      }]
  }
    */



    })

});
