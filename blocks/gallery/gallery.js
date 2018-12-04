var gallery = document.getElementById('hiw');

var h2_gallery = document.createElement('h2');
h2_gallery.className = 'gallery__title';
h2_gallery.innerHTML = 'future is exciting with level';
gallery.appendChild(h2_gallery);

var div_gallery = document.createElement('div');
div_gallery.className = 'gallery__box';
gallery.appendChild(div_gallery);

for(var i = 0; i < 8; i++) {
	var item_gallery = document.createElement('div');
	item_gallery.className = 'gallery__item';
	item_gallery.tabIndex = i;
	div_gallery.appendChild(item_gallery);
}