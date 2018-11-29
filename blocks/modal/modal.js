var modal = document.querySelector('.modal');
var сall__modal1 = document.querySelector('.header__authorization');
var сall__modal2 = document.querySelector('.rightMenu__authorization');
var close = document.querySelector('.modal__close');

function open__modal () {
	modal.style.display = 'flex';
}


сall__modal1.onclick = function() {
	open__modal();
}

сall__modal2.onclick = function() {
	open__modal();
}


close.onclick = function  () {
 	modal.style.display = 'none';
}

window.onclick = function(event) {
	if( event.target == modal ) {
 		modal.style.display = 'none';		
	}
}