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



