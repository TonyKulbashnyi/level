
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
/*

JSON request processing, filtering, searching, sorting process
 */

const req = new XMLHttpRequest();
req.onreadystatechange = function() {

	if( req.readyState === 4 && req.status === 200) {
		const text = req.responseText;
		const json = JSON.parse(text);


/*
searching for login, 
in developing
*/
		var search = document.getElementById('choice__search');
		search.oninput  = function find(val) {
			var val = search.value;
		  for(var i = 0; i< json.length; i++) {
		    if (json[i].login == val) 

			 var result = json[i];

		  }
			console.log(result);
		}

/*
DOM structure JSON
*/
		function create_choice() {
						var candidates = document.getElementById('candidates')
						var choice__candidate = document.createElement('div');
						choice__candidate.className = 'choice__candidate';
						candidates.appendChild(choice__candidate);	

						var choice__login = document.createElement('div');
						choice__login.className = 'choice__login';
						choice__login.innerHTML = json[i].id +'. '+ json[i].login;
						choice__candidate.appendChild(choice__login);

						var choice__marks = document.createElement('div');
						choice__marks.className = 'choice__marks';
						choice__candidate.appendChild(choice__marks);

						var choice__pl = document.createElement('div');
						choice__pl.className = 'choice__pl';
						choice__marks.appendChild(choice__pl);

						choice__h6 = document.createElement('h6');
						choice__h6.innerHTML = 'Program Points:';
						choice__pl.appendChild(choice__h6);


						chioce__ul1 = document.createElement('ul');
						choice__pl.appendChild(chioce__ul1);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'c#:'
						chioce__ul1.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].pl.c;
						choice__li1.appendChild(choice__span1);


						choice__li2 = document.createElement('li');
						choice__li2.innerHTML = 'c/c++:'
						chioce__ul1.appendChild(choice__li2);

						choice__span2 = document.createElement('span');
						choice__span2.innerHTML = json[i].pl.c_;
						choice__li2.appendChild(choice__span2);

						choice__li3 = document.createElement('li');
						choice__li3.innerHTML = 'delphi:'
						chioce__ul1.appendChild(choice__li3);

						choice__span3 = document.createElement('span');
						choice__span3.innerHTML = json[i].pl.delphi;
						choice__li3.appendChild(choice__span3);


						choice__li4 = document.createElement('li');
						choice__li4.innerHTML = 'java:'
						chioce__ul1.appendChild(choice__li4);

						choice__span4 = document.createElement('span');
						choice__span4.innerHTML = json[i].pl.java;
						choice__li4.appendChild(choice__span4);

						choice__li5 = document.createElement('li');
						choice__li5.innerHTML = 'js:'
						chioce__ul1.appendChild(choice__li5);

						choice__span5 = document.createElement('span');
						choice__span5.innerHTML = json[i].pl.js;
						choice__li5.appendChild(choice__span5);						

						choice__li6 = document.createElement('li');
						choice__li6.innerHTML = 'php:'
						chioce__ul1.appendChild(choice__li6);

						choice__span6 = document.createElement('span');
						choice__span6.innerHTML = json[i].pl.php;
						choice__li6.appendChild(choice__span6);		

						choice__li7 = document.createElement('li');
						choice__li7.innerHTML = 'python:'
						chioce__ul1.appendChild(choice__li7);

						choice__span7 = document.createElement('span');
						choice__span7.innerHTML = json[i].pl.python;
						choice__li7.appendChild(choice__span7);	

						choice__li8 = document.createElement('li');
						choice__li8.innerHTML = 'ruby:'
						chioce__ul1.appendChild(choice__li8);

						choice__span8 = document.createElement('span');
						choice__span8.innerHTML = json[i].pl.ruby;
						choice__li8.appendChild(choice__span8);	

						choice__li9 = document.createElement('li');
						choice__li9.innerHTML = 'html:'
						chioce__ul1.appendChild(choice__li9);

						choice__span9 = document.createElement('span');
						choice__span9.innerHTML = json[i].pl.html;
						choice__li9.appendChild(choice__span9);	


					var choice__db = document.createElement('div');
					choice__db.className = 'choice__db';
					choice__marks.appendChild(choice__db);


						choice__h6_2 = document.createElement('h6');
						choice__h6_2.innerHTML = 'Data Base Points:';
						choice__db.appendChild(choice__h6_2);


						choice__ul2 = document.createElement('ul');
						choice__db.appendChild(choice__ul2);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'sql:'
						choice__ul2.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].db.sql;
						choice__li1.appendChild(choice__span1);

						choice__li2 = document.createElement('li');
						choice__li2.innerHTML = 'oracle:'
						choice__ul2.appendChild(choice__li2);

						choice__span2 = document.createElement('span');
						choice__span2.innerHTML = json[i].db.oracle;
						choice__li2.appendChild(choice__span2);

						choice__li3 = document.createElement('li');
						choice__li3.innerHTML = 'mysql:'
						choice__ul2.appendChild(choice__li3);

						choice__span3 = document.createElement('span');
						choice__span3.innerHTML = json[i].db.mysql;
						choice__li3.appendChild(choice__span3);

					var choice__os = document.createElement('div');
					choice__os.className = 'choice__os';
					choice__marks.appendChild(choice__os);


						choice__h6_3 = document.createElement('h6');
						choice__h6_3.innerHTML = 'Systems Points:';
						choice__os.appendChild(choice__h6_3);


						choice__ul3 = document.createElement('ul');
						choice__os.appendChild(choice__ul3);


						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'android:'
						choice__ul3.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].os.android;
						choice__li1.appendChild(choice__span1);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'ios:'
						choice__ul3.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].os.ios;
						choice__li1.appendChild(choice__span1);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'unix:'
						choice__ul3.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].os.unix;
						choice__li1.appendChild(choice__span1);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'windows:'
						choice__ul3.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].os.windows;
						choice__li1.appendChild(choice__span1);
}

		for ( var i in json ) {
			create_choice();	
		}


		document.getElementById('full_list').onclick = function() {

			document.getElementById('candidates').classList.remove('hidden');
			document.getElementById('choiceOS').innerHTML = "";
			document.getElementById('choiceDB').innerHTML = "";
			document.getElementById('choicePL').innerHTML = "";
			document.getElementById('choiceFE').innerHTML = "";


		}

/*
sort top  for front-end items 
*/
		document.getElementById('fe_top').onclick = function() {

			document.getElementById('candidates').classList.add('hidden');
			document.getElementById('choiceOS').innerHTML = "";
			document.getElementById('choiceDB').innerHTML = "";
			document.getElementById('choicePL').innerHTML = "";
			document.getElementById('choiceFE').innerHTML = "";

			var sortFE = json.sort(function(a,b) {
			if ( a.pl.js + a.pl.html < b.pl.js + b.pl.html){
				return 1;
			}
			if (a.pl.js + a.pl.html > b.pl.js + b.pl.html){
				return -1;
			}
			return 0;
		});		
				for(i in sortFE){
					var choice__candidate = document.createElement('div');
					choice__candidate.className = 'choice__candidate';
					document.getElementById('choiceFE').appendChild(choice__candidate);	
					
					var choice__login = document.createElement('div');
					choice__login.className = 'choice__login';
					choice__login.innerHTML = json[i].id +'. '+ json[i].login;
					choice__candidate.appendChild(choice__login);

					var choice__marks = document.createElement('div');
					choice__marks.className = 'choice__marks';
					choice__candidate.appendChild(choice__marks);

					var choice__pl = document.createElement('div');
					choice__pl.className = 'choice__pl';
					choice__marks.appendChild(choice__pl);	

					chioce__ul1 = document.createElement('ul');
					choice__pl.appendChild(chioce__ul1);

					choice__li5 = document.createElement('li');
					choice__li5.innerHTML = 'js:'
					chioce__ul1.appendChild(choice__li5);

					choice__span5 = document.createElement('span');
					choice__span5.innerHTML = json[i].pl.js;
					choice__li5.appendChild(choice__span5);	
					choice__li9 = document.createElement('li');
					choice__li9.innerHTML = 'html:'
					chioce__ul1.appendChild(choice__li9);

					choice__span9 = document.createElement('span');
					choice__span9.innerHTML = json[i].pl.html;
					choice__li9.appendChild(choice__span9);		

					
				}	

		}

/*
sort top  for OS items 
*/
		document.getElementById('os_top').onclick = function() {

			document.getElementById('candidates').classList.add('hidden');
			document.getElementById('choiceOS').innerHTML = "";
			document.getElementById('choiceDB').innerHTML = "";
			document.getElementById('choicePL').innerHTML = "";
			document.getElementById('choiceFE').innerHTML = "";	
					
			var sortOS = json.sort(function(a,b) {
				if ( a.os.android + a.os.ios + a.os.unix + a.os.windows < b.os.android + b.os.ios + b.os.unix + b.os.windows){
					return 1;
				}
				if (a.os.android + a.os.ios + a.os.unix + a.os.windows > b.os.android + b.os.ios + b.os.unix + b.os.windows){
					return -1;
				}
				
			});	
				for(i in sortOS){

					var choice__candidate = document.createElement('div');
					choice__candidate.className = 'choice__candidate';
					document.getElementById('choiceOS').appendChild(choice__candidate);	
					
					var choice__login = document.createElement('div');
					choice__login.className = 'choice__login';
					choice__login.innerHTML = json[i].id +'. '+ json[i].login;
					choice__candidate.appendChild(choice__login);

					var choice__marks = document.createElement('div');
					choice__marks.className = 'choice__marks';
					choice__candidate.appendChild(choice__marks);

					var choice__os = document.createElement('div');
					choice__os.className = 'choice__os';
					choice__marks.appendChild(choice__os);

						choice__ul3 = document.createElement('ul');
						choice__os.appendChild(choice__ul3);


						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'android:'
						choice__ul3.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].os.android;
						choice__li1.appendChild(choice__span1);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'ios:'
						choice__ul3.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].os.ios;
						choice__li1.appendChild(choice__span1);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'unix:'
						choice__ul3.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].os.unix;
						choice__li1.appendChild(choice__span1);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'windows:'
						choice__ul3.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].os.windows;
						choice__li1.appendChild(choice__span1);
				}							
		}

/*
sort top  for Program language items 
*/
		document.getElementById('pl_top').onclick = function() {

			document.getElementById('candidates').classList.add('hidden');
			document.getElementById('choiceOS').innerHTML = "";
			document.getElementById('choiceDB').innerHTML = "";
			document.getElementById('choicePL').innerHTML = "";
			document.getElementById('choiceFE').innerHTML = "";

			var sortPL = json.sort(function(a,b) {
				if ( a.pl.c + a.pl.c_ + a.pl.delphi + a.pl.java + a.pl.js + a.pl.php + a.pl.python + a.pl.ruby + a.pl.html < 
					b.pl.c + b.pl.c_ + b.pl.delphi + b.pl.java + b.pl.js + b.pl.php + b.pl.python + b.pl.ruby + b.pl.html){
					return 1;
				}
				if ( a.pl.c + a.pl.c_ + a.pl.delphi + a.pl.java + a.pl.js + a.pl.php + a.pl.python + a.pl.ruby + a.pl.html > 
					b.pl.c + b.pl.c_ + b.pl.delphi + b.pl.java + b.pl.js + b.pl.php + b.pl.python + b.pl.ruby + b.pl.html){
					return -1;
				}
				return 0;
			});	
				for(i in sortPL){

					var choice__candidate = document.createElement('div');
					choice__candidate.className = 'choice__candidate';
					document.getElementById('choicePL').appendChild(choice__candidate);	
					
					var choice__login = document.createElement('div');
					choice__login.className = 'choice__login';
					choice__login.innerHTML = json[i].id +'. '+ json[i].login;
					choice__candidate.appendChild(choice__login);

					var choice__marks = document.createElement('div');
					choice__marks.className = 'choice__marks';
					choice__candidate.appendChild(choice__marks);

						var choice__pl = document.createElement('div');
						choice__pl.className = 'choice__pl';
						choice__marks.appendChild(choice__pl);

						chioce__ul1 = document.createElement('ul');
						choice__pl.appendChild(chioce__ul1);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'c#:'
						chioce__ul1.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].pl.c;
						choice__li1.appendChild(choice__span1);


						choice__li2 = document.createElement('li');
						choice__li2.innerHTML = 'c/c++:'
						chioce__ul1.appendChild(choice__li2);

						choice__span2 = document.createElement('span');
						choice__span2.innerHTML = json[i].pl.c_;
						choice__li2.appendChild(choice__span2);

						choice__li3 = document.createElement('li');
						choice__li3.innerHTML = 'delphi:'
						chioce__ul1.appendChild(choice__li3);

						choice__span3 = document.createElement('span');
						choice__span3.innerHTML = json[i].pl.delphi;
						choice__li3.appendChild(choice__span3);


						choice__li4 = document.createElement('li');
						choice__li4.innerHTML = 'java:'
						chioce__ul1.appendChild(choice__li4);

						choice__span4 = document.createElement('span');
						choice__span4.innerHTML = json[i].pl.java;
						choice__li4.appendChild(choice__span4);

						choice__li5 = document.createElement('li');
						choice__li5.innerHTML = 'js:'
						chioce__ul1.appendChild(choice__li5);

						choice__span5 = document.createElement('span');
						choice__span5.innerHTML = json[i].pl.js;
						choice__li5.appendChild(choice__span5);						

						choice__li6 = document.createElement('li');
						choice__li6.innerHTML = 'php:'
						chioce__ul1.appendChild(choice__li6);

						choice__span6 = document.createElement('span');
						choice__span6.innerHTML = json[i].pl.php;
						choice__li6.appendChild(choice__span6);		

						choice__li7 = document.createElement('li');
						choice__li7.innerHTML = 'python:'
						chioce__ul1.appendChild(choice__li7);

						choice__span7 = document.createElement('span');
						choice__span7.innerHTML = json[i].pl.python;
						choice__li7.appendChild(choice__span7);	

						choice__li8 = document.createElement('li');
						choice__li8.innerHTML = 'ruby:'
						chioce__ul1.appendChild(choice__li8);

						choice__span8 = document.createElement('span');
						choice__span8.innerHTML = json[i].pl.ruby;
						choice__li8.appendChild(choice__span8);	

						choice__li9 = document.createElement('li');
						choice__li9.innerHTML = 'html:'
						chioce__ul1.appendChild(choice__li9);

						choice__span9 = document.createElement('span');
						choice__span9.innerHTML = json[i].pl.html;
						choice__li9.appendChild(choice__span9);	



				}						
		}

/*
sort top  for Data Base items 
*/
		document.getElementById('db_top').onclick = function() {

			document.getElementById('candidates').classList.add('hidden');
			document.getElementById('choiceOS').innerHTML = "";
			document.getElementById('choiceDB').innerHTML = "";
			document.getElementById('choicePL').innerHTML = "";
			document.getElementById('choiceFE').innerHTML = "";

			var sortDB = json.sort(function(a,b) {
				if ( a.db.sql + a.db.oracle + a.db.mysql < b.db.sql + b.db.oracle + b.db.mysql){
					return 1;
				}
				if (a.db.sql + a.db.oracle + a.db.mysql > b.db.sql + b.db.oracle + b.db.mysql){
					return -1;
				}
				
			});		
				for(i in sortDB){

					var choice__candidate = document.createElement('div');
					choice__candidate.className = 'choice__candidate';
					document.getElementById('choiceDB').appendChild(choice__candidate);	
					
					var choice__login = document.createElement('div');
					choice__login.className = 'choice__login';
					choice__login.innerHTML = json[i].id +'. '+ json[i].login;
					choice__candidate.appendChild(choice__login);

					var choice__marks = document.createElement('div');
					choice__marks.className = 'choice__marks';
					choice__candidate.appendChild(choice__marks);

					var choice__db = document.createElement('div');
					choice__db.className = 'choice__db';
					choice__marks.appendChild(choice__db);

						choice__ul2 = document.createElement('ul');
						choice__db.appendChild(choice__ul2);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'sql:'
						choice__ul2.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = json[i].db.sql;
						choice__li1.appendChild(choice__span1);

						choice__li2 = document.createElement('li');
						choice__li2.innerHTML = 'oracle:'
						choice__ul2.appendChild(choice__li2);

						choice__span2 = document.createElement('span');
						choice__span2.innerHTML = json[i].db.oracle;
						choice__li2.appendChild(choice__span2);

						choice__li3 = document.createElement('li');
						choice__li3.innerHTML = 'mysql:'
						choice__ul2.appendChild(choice__li3);

						choice__span3 = document.createElement('span');
						choice__span3.innerHTML = json[i].db.mysql;
						choice__li3.appendChild(choice__span3);
				}								
		}



/*
Filter on developing
*/

		/*quation*/
		document.getElementById('html_value').onchange = function() {
			var x = htmlFilter(this.value);
			var filter = json.filter(function(a) {
				  return a.pl.html >= x;
				});
			console.log(filter);
			console.log(x)
		}
		

	}
}

req.open('get', 'http://localhost:3000/data.json');
req.send();

/*quation*/
function htmlFilter(newVal){
	return newVal;
}




/*
Функции для отображения контента в один экран и прятания других экранов
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



function hover() {
	var change =  document.querySelector(".header__signIn");
	change.style.backgroundColor = '#fff';
}

function hover_out() {
	var change =  document.querySelector(".header__signIn");
	change.style.background = '';
}
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



var slides = document.querySelectorAll('.sliderPage__slides .sliderPage__slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 7000);


function nextSlide() {
 goToSlide(currentSlide + 1);
}

function previousSlide() {
 goToSlide(currentSlide - 1);
}

function goToSlide(n) {
 slides[currentSlide].className = 'sliderPage__slide';
 currentSlide = (n + slides.length) % slides.length;
 slides[currentSlide].className = 'sliderPage__slide sliderPage__showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
 nextSlide();
}

previous.onclick = function() {
 previousSlide();
}
function hide_start() {
	var start = document.querySelector('.start');
	start.style.display='none';
}




function show_manager() {

	const main = document.querySelector('.main');
	const aboutUs_manager = document.querySelector('.aboutUs');
	const slider_manager = document.querySelector('.sliderPage');
	const gallery_manager = document.querySelector('.gallery');
	const contact_manager = document.querySelector('.contact__info');
	aboutUs_manager.classList.add('manager1');
	slider_manager.classList.add('manager2');
	gallery_manager.classList.add('manager3');
	contact_manager.classList.add('manager4');

	main.classList.remove('hidden');
	hide_start();

	//design depending choice block 
	//border-color
	
	var header__element = document.getElementsByClassName('header__element');

	for(var i = 0; i < header__element.length; i++) {
    	header__element[i].classList.add('borderRight_mn');
	}

	document.querySelector('.header__signUp').classList.add('border_mn');
	document.querySelector('.header__signIn').classList.add('border_mn');

	document.querySelector('.header__signIn').classList.add('bg_mn');

	document.querySelector('.main__rightSection').classList.add('bg_mn');
	document.querySelector('.main__rightMenu').classList.add('bg_mn');
	document.querySelector('.rightMenu__hide').classList.add('bg_mn');
	document.getElementById('hiddenMenu').classList.add('bg_mn');

	/* 
	replacement block for make your choice for the proger
	*/

	var a1_myc = document.getElementById('dropList');
	var a2_myc = document.getElementById('hiddenMenu');

	var for_myc = function() {
		document.querySelector('.aboutUs').classList.add('hidden');
		document.querySelector('.sliderPage').classList.add('hidden');
		document.querySelector('.gallery').classList.add('hidden');
		document.querySelector('.skills').classList.add('hidden');
		document.querySelector('.choice').classList.remove('hidden');
		document.querySelector('.contact').classList.add('hidden');
	}

	a1_myc.onclick = function() {
		for_myc()
	}

	a2_myc.onclick = function() {
		for_myc()
	}
}

function show_programmer() {

	const main = document.querySelector('.main');
	const aboutUs_programmer = document.querySelector('.aboutUs');
	const slider_programmer = document.querySelector('.sliderPage');
	const gallery_programmer = document.querySelector('.gallery');
	const contact_programmer = document.querySelector('.contact__info');
	aboutUs_programmer.classList.add('programmer1');
	slider_programmer.classList.add('programmer2');
	gallery_programmer.classList.add('programmer3');
	contact_programmer.classList.add('programmer4');	

	main.classList.remove('hidden');
	hide_start();
	//design depending choice block 
	//border-color
	var header__element = document.getElementsByClassName('header__element');

	for(var i = 0; i < header__element.length; i++) {
    	header__element[i].classList.add('borderRight_pr');
	}

	document.querySelector('.header__signUp').classList.add('border_pr');
	document.querySelector('.header__signIn').classList.add('border_pr');

	document.querySelector('.header__signIn').classList.add('bg_pr');

	document.querySelector('.main__rightSection').classList.add('bg_pr');
	document.querySelector('.main__rightMenu').classList.add('bg_pr');
	document.querySelector('.rightMenu__hide').classList.add('bg_pr');


	document.getElementById('hiddenMenu').classList.add('bg_pr');

	/* 
	replacement block for make your choice for the proger
	*/
	var a1_myc = document.getElementById('dropList');
	var a2_myc = document.getElementById('hiddenMenu');

	var for_myc = function() {
		document.querySelector('.aboutUs').classList.add('hidden');
		document.querySelector('.sliderPage').classList.add('hidden');
		document.querySelector('.gallery').classList.add('hidden');
		document.querySelector('.skills').classList.remove('hidden');
		document.querySelector('.choice').classList.add('hidden');
		document.querySelector('.contact').classList.add('hidden');
	}

	a1_myc.onclick = function() {
		for_myc()
	}

	a2_myc.onclick = function() {
		for_myc()
	}

}



