var aboutUs = document.getElementById('aboutUs');

var a1_aboutUs = document.createElement('a');
a1_aboutUs.href = "#";
aboutUs.appendChild(a1_aboutUs);

h1_aboutUs = document.createElement('h1');
h1_aboutUs.className = 'aboutUs__title';
h1_aboutUs.innerHTML = 'level - your window to the world of IT technologies';
a1_aboutUs.appendChild(h1_aboutUs);

p_aboutUs = document.createElement('p');
p_aboutUs.className = 'aboutUs__text';
p_aboutUs.innerHTML = 'Over the past 10 years, the IT-sector has received rapid development and won the first place in popularity in the labor market of Ukraine. It gave the opportunity to appear and develop such IT specialties: programmer, webmaster, web designer, project manager, security administrator and many others. Today, this area of activity holds its leading position, thereby attracting many applicants, students and specialists for cooperation. In IT areas, most often come professionals who are very inspired by their profession. It brings both profit and career advancement, but for this specialist you must constantly be involved in the work process.'
aboutUs.appendChild(p_aboutUs);

a2__aboutUs = document.createElement('a');
a2__aboutUs.href = "#slider";
a2__aboutUs.id = 'a_slider';
aboutUs.appendChild(a2__aboutUs);

img_aboutUs = document.createElement('img');
img_aboutUs.altName = 'scroll';
img_aboutUs.className = 'aboutUs__scroll';
img_aboutUs.src = 'img/scroll_white.png';
a2__aboutUs.appendChild(img_aboutUs);
