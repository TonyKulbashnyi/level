var sliderPage = document.getElementById('slider');

var h2_slider = document.createElement('h2');
h2_slider.className = 'sliderPage__title';
h2_slider.innerHTML = 'best words about programming';
sliderPage.appendChild(h2_slider);

var div1_slider = document.createElement('div');
div1_slider.className = 'sliderPage__slider';
sliderPage.appendChild(div1_slider);

var div2_slider = document.createElement('div');
div2_slider.className = 'sliderPage__controls';
div2_slider.id = 'previous';
div1_slider.appendChild(div2_slider);

var ul_slider = document.createElement('ul');
ul_slider.className = 'sliderPage__slides';
div1_slider.appendChild(ul_slider);

var li1_slider = document.createElement('li');
li1_slider.className = 'sliderPage__slide sliderPage__showing';
ul_slider.appendChild(li1_slider);

for (var i = 0; i < 6 ; i++) {

var lin_slider = document.createElement('li');
lin_slider.className = 'sliderPage__slide';
ul_slider.appendChild(lin_slider);
}

var div3_slider = document.createElement('div');
div3_slider.className = 'sliderPage__controls';
div3_slider.id = 'next';
div1_slider.appendChild(div3_slider);







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