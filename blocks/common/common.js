
/*
Functions for displaying content on one screen and hiding other screens

*/
var slider = document.getElementById('a_slider')

slider.onclick = function() {
	document.querySelector('.sliderPage').classList.remove('hidden');
	document.querySelector('.aboutUs').classList.add('hidden');
}




var a1_contact = document.getElementById('a1_contact');
var a2_contact = document.getElementById('a2_contact');

var for_contact = function() {
	document.querySelector('.aboutUs').classList.add('hidden');
	document.querySelector('.sliderPage').classList.add('hidden');
	document.querySelector('.gallery').classList.add('hidden');
	document.querySelector('.skills').classList.add('hidden');
	document.querySelector('.contact').classList.remove('hidden');
	document.querySelector('.choice').classList.add('hidden');
}


a1_contact.onclick = function() {
	for_contact()
}

a2_contact.onclick = function() {
	for_contact()
}


var a1_aboutUs = document.getElementById('a1_aboutUs');
var a2_aboutUs = document.getElementById('a2_aboutUs');

var for_aboutUs = function() {
	document.querySelector('.aboutUs').classList.remove('hidden');
	document.querySelector('.sliderPage').classList.add('hidden');
	document.querySelector('.gallery').classList.add('hidden');
	document.querySelector('.skills').classList.add('hidden');
	document.querySelector('.contact').classList.add('hidden');	
	document.querySelector('.choice').classList.add('hidden');
}

a1_aboutUs.onclick = function() {
	for_aboutUs()

}

a2_aboutUs.onclick = function() {
	for_aboutUs()
}



var a1_hiw = document.getElementById('a1_hiw');
var a2_hiw = document.getElementById('a2_hiw');

var for_hiw = function() {

	document.querySelector('.aboutUs').classList.add('hidden');
	document.querySelector('.sliderPage').classList.add('hidden');
	document.querySelector('.gallery').classList.remove('hidden');
	document.querySelector('.skills').classList.add('hidden');
	document.querySelector('.contact').classList.add('hidden');
	document.querySelector('.choice').classList.add('hidden');	
}

a1_hiw.onclick = function() {
	for_hiw()
}

a2_hiw.onclick = function() {
	for_hiw()
}







/*hack for ie*/
if((!(window.ActiveXObject) && "ActiveXObject" in window) == true){
	document.querySelector('.sliderPage__slides').style.marginRight = '40%';
}

