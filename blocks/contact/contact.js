// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 50.5210682, lng: 30.2492746};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.querySelector('.contact__map'), 
      {zoom: 17, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}