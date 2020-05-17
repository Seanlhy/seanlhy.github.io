var map = L.map('mapid').setView([39.8283, -98.5795],4);
var tileUrl = 'https://api.maptiler.com/maps/basic/{z}/{x}/{y}@2x.png?key=ihnn8wFObA31xZv7sgWY';
var attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
L.tileLayer(tileUrl, {attribution,
    zoomOffset: -1,
    minZoom: 1,
    tileSize: 512
}).addTo(map);

var popup = L.popup();

function clickCoordinate(e){
    popup.setLatLng(e.latlng).setContent('<p><strong>You clicked the map at </strong></p>' + e.latlng.toString()).openOn(map);
}

map.on('click', clickCoordinate);
