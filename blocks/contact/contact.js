var contact = document.getElementById('contact');

var contact__info = document.createElement('div');
contact__info.className = 'contact__info';
contact.appendChild(contact__info);

var ul__contact = document.createElement('ul');
contact__info.appendChild(ul__contact);

var li1__contact = document.createElement('li');
ul__contact.appendChild(li1__contact);

a1__contact = document.createElement('a');
a1__contact.href = '#';
a1__contact.target = '_blank';
a1__contact.innerHTML = '<i class="fas fa-home"></i> Irpin, Antonov str.';
li1__contact.appendChild(a1__contact);

var li2__contact = document.createElement('li');
ul__contact.appendChild(li2__contact);

a2__contact = document.createElement('a');
a2__contact.href = '#';
a2__contact.target = '_blank';
a2__contact.innerHTML = '<i class="fas fa-phone-square"></i> tel: (099) 034 55 62';
li2__contact.appendChild(a2__contact);

var li3__contact = document.createElement('li');
ul__contact.appendChild(li3__contact);

a3__contact = document.createElement('a');
a3__contact.href = '#';
a3__contact.target = '_blank';
a3__contact.innerHTML = '<i class="far fa-envelope"></i> level@gmail.com';
li3__contact.appendChild(a3__contact);

var li4__contact = document.createElement('li');
ul__contact.appendChild(li4__contact);

a4__contact = document.createElement('a');
a4__contact.href = 'https://www.facebook.com/profile.php?id=100009540698056&ref=bookmarks';
a4__contact.target = '_blank';
a4__contact.innerHTML = '<i class="fab fa-facebook-square"></i> facebook.com/level';
li4__contact.appendChild(a4__contact);

var li5__contact = document.createElement('li');
ul__contact.appendChild(li5__contact);

a5__contact = document.createElement('a');
a5__contact.href = 'https://t.me/tony2night';
a5__contact.target = '_blank';
a5__contact.innerHTML = '<i class="fab fa-telegram"></i> t.me/level';
li5__contact.appendChild(a5__contact);

var li6__contact = document.createElement('li');
ul__contact.appendChild(li6__contact);

a6__contact = document.createElement('a');
a6__contact.href = 'https://www.instagram.com/kulbashnyi.a/';
a6__contact.target = '_blank';
a6__contact.innerHTML = '<i class="fab fa-instagram"></i> insta/level';
li6__contact.appendChild(a6__contact);


var contact__map = document.createElement('div');
contact__map.className = 'contact__map';
contact.appendChild(contact__map);






// Initialize and add the map
function initMap() {
  var uluru = {lat: 50.5210682, lng: 30.2492746};
  var map = new google.maps.Map(
      document.querySelector('.contact__map'), 
      {zoom: 15, center: uluru});
  var marker = new google.maps.Marker({
  	position: uluru, 
  	map: map,
  	title: 'level',
  	icon: {
		url: "img/marker.png",
		scaledSize: new google.maps.Size(64, 64)
	}
  });
}