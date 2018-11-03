var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: 22.59493325, lng: 120.3068658 }
  });
  var data = [
    {
      position: { lat: 22.592975, lng: 120.307146 },
      map: map,
      title: '消防局'
    },
    {
      position: { lat: 22.596805, lng: 120.304688 },
      map: map,
      title: '加油站'
    }
  ];
  for(var i = 0;data.length>i;i++){
    var marker = new google.maps.Marker(data[i]);
  }
}