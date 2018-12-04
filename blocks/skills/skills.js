// var skills = document.getElementById('skills');

// var h2__skills = document.createElement('h2');
// h2__skills.className = 'skills__title';
// h2__skills.innerHTML = 'what are you skills?';
// skills.appendChild(h2__skills);

// var skills__box = document.createElement('div');
// skills__box.className = 'skills__box';
// skills.appendChild(skills__box);

// 	var skills__directions = document.createElement('div');
// 	skills__directions.className = 'skills__directions';
// 	skills__box.appendChild(skills__directions);

// 		var skills__head = document.createElement('div');
// 		skills__head.className = 'skills__head';
// 		skills__head.id = 'skill_h1';
// 		skills__directions.appendChild(skills__head);

// 			var span1__skills = document.createElement('span');
// 			span1__skills.innerHTML = 'programming languages';
// 			skills__head.appendChild(span1__skills);

// 			var i1__skills = document.createElement('i');
// 			i1__skills.className = 'fas fa-plus fa-plus1';
// 			skills__head.appendChild(i1__skills);

// 			var i2__skills = document.createElement('i');
// 			i2__skills.className = 'fas fa-times fa-times1';
// 			skills__head.appendChild(i2__skills);


// 		var skills__body = document.createElement('div');
// 		skills__body.className = 'skills__body';
// 		skills__body.id = 'skill_b1';
// 		skills__body.style.display = 'none';
// /**/
// 			var skills__part1 = document.createElement('div');
// 			skills__part.className = 'skills__part'
// 			skills__body.appendChild(skills__part);

// 				var skills__span1 = document.createElement('span');
// 				skills__span1.innerHTML = 'C#';
// 				skills__part.appendChild(skills__span1);


// 				var skills__stars = document.createElement('div');
// 				skills__stars.className = 'skills__stars direction';
// 				skills__part.appendChild(skills__stars);

// 					var skills__input1 = document.createElement('input');
// 					skills__input1.type = 'radio';
// 					skills__input1.name = 'c#';
// 					skills__input1.id = 'c#-5';
// 					skills__stars.appendChild(skills__input1);

// 						var skills__label = document.createElement('label');
// 						skills__label.for = 'c#-5'
// 						skills__stars.appendChild(skills__label);

// 						var skills__i1 = document.createElement('i');
// 						skills__i1.className = 'far fa-star';
// 						skills__label.appendChild(skills_i1);

// 						var skills__i2 = document.createElement('i');
// 						skills__i1.className = 'far fa-star';
// 						skills__label.appendChild(skills_i1);














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


