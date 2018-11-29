/*
the appearance of the side tab
 */
var aside = document.getElementById('rightSection'); 

aside.onclick = function() {
	aside.style.display = 'none';
	document.getElementById('rightMenu').style.display = 'flex'
}

var rightMenu__hide = document.getElementById('rightMenu__hide')

rightMenu__hide.onclick = function() {
	document.getElementById('rightMenu').style.display = 'none'
	document.getElementById('rightSection').style.display = 'flex'
}