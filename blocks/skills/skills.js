var skill_h1 = document.getElementById('skill_h1');
var skill_h2 = document.getElementById('skill_h2');
var skill_h3 = document.getElementById('skill_h3');



skill_h1.onclick = function() {
	var skill_b1 = document.getElementById('skill_b1').style.display;
	if (skill_b1 == 'none') {
		document.getElementById('skill_b1').style.display ='flex';
		document.querySelector('.fa-plus1').style.display = 'none';
		document.querySelector('.fa-times1').style.display = 'inline-block';
	} else {
		document.getElementById('skill_b1').style.display = 'none';
		document.querySelector('.fa-plus1').style.display = 'inline-block';
		document.querySelector('.fa-times1').style.display = 'none';
	}
}


skill_h2.onclick = function() {
	var skill_b2 = document.getElementById('skill_b2').style.display;
	if (skill_b2 == 'none') {
		document.getElementById('skill_b2').style.display ='flex';
		document.querySelector('.fa-plus2').style.display = 'none';
		document.querySelector('.fa-times2').style.display = 'inline-block';
	} else {
		document.getElementById('skill_b2').style.display = 'none';
		document.querySelector('.fa-plus2').style.display = 'inline-block';
		document.querySelector('.fa-times2').style.display = 'none';
	}
}


skill_h3.onclick = function() {
	var skill_b3 = document.getElementById('skill_b3').style.display;
	if (skill_b3 == 'none') {
		document.getElementById('skill_b3').style.display ='flex';
		document.querySelector('.fa-plus3').style.display = 'none';
		document.querySelector('.fa-times3').style.display = 'inline-block';
	} else {
		document.getElementById('skill_b3').style.display = 'none';
		document.querySelector('.fa-plus3').style.display = 'inline-block';
		document.querySelector('.fa-times3').style.display = 'none';
	}
}


