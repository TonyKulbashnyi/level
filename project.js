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

/*
the appearance of the side tab
 */
var aside = document.getElementById('rightSection'); 

aside.onclick = function() {
	aside.style.display = 'none';
	document.getElementById('rightMenu').style.display = 'flex'
}

var rightMenu__hide = document.getElementById('rightMenu')

rightMenu__hide.onclick = function() {
	document.getElementById('rightMenu').style.display = 'none'
	document.getElementById('rightSection').style.display = 'flex'
}
function refresh() {
	document.getElementById('candidates').classList.add('hidden');
	document.getElementById('choiceOS').innerHTML = "";
	document.getElementById('choiceDB').innerHTML = "";
	document.getElementById('choicePL').innerHTML = "";
	document.getElementById('choiceFE').innerHTML = "";
	document.getElementById('resultFilter').innerHTML = "";
	document.getElementById('search__output').innerHTML = "";
	btn_prev.style.visibility = "hidden";
  	btn_next.style.visibility = "hidden";
  	document.getElementById('page').innerHTML = '';

}

/*

JSON request processing, filtering, searching, sorting process
 */

const req = new XMLHttpRequest();
req.onreadystatechange = function() {

	if( req.readyState === 4 && req.status === 200) {
		const text = req.responseText;
		var json = JSON.parse(text);


/*
Filter HTML	
*/


		var filter = document.getElementById('filterHTML')
		filter.onmouseup = function(val){
			var val = filter.value;
			var filterHTML = json.filter(function(a) {
				  return a.pl.html >= val;
				});

			refresh();
				
			for ( var i in filterHTML ) {
						var resultFilter = document.getElementById('resultFilter')
						var choice__candidate = document.createElement('div');
						choice__candidate.className = 'choice__candidate';
						resultFilter.appendChild(choice__candidate);	

						var choice__login = document.createElement('div');
						choice__login.className = 'choice__login';
						choice__login.innerHTML = filterHTML[i].id +'. '+ filterHTML[i].login;
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
						choice__span1.innerHTML = filterHTML[i].pl.c;
						choice__li1.appendChild(choice__span1);


						choice__li2 = document.createElement('li');
						choice__li2.innerHTML = 'c/c++:'
						chioce__ul1.appendChild(choice__li2);

						choice__span2 = document.createElement('span');
						choice__span2.innerHTML = filterHTML[i].pl.c_;
						choice__li2.appendChild(choice__span2);

						choice__li3 = document.createElement('li');
						choice__li3.innerHTML = 'delphi:'
						chioce__ul1.appendChild(choice__li3);

						choice__span3 = document.createElement('span');
						choice__span3.innerHTML = filterHTML[i].pl.delphi;
						choice__li3.appendChild(choice__span3);


						choice__li4 = document.createElement('li');
						choice__li4.innerHTML = 'java:'
						chioce__ul1.appendChild(choice__li4);

						choice__span4 = document.createElement('span');
						choice__span4.innerHTML = filterHTML[i].pl.java;
						choice__li4.appendChild(choice__span4);

						choice__li5 = document.createElement('li');
						choice__li5.innerHTML = 'js:'
						chioce__ul1.appendChild(choice__li5);

						choice__span5 = document.createElement('span');
						choice__span5.innerHTML = filterHTML[i].pl.js;
						choice__li5.appendChild(choice__span5);						

						choice__li6 = document.createElement('li');
						choice__li6.innerHTML = 'php:'
						chioce__ul1.appendChild(choice__li6);

						choice__span6 = document.createElement('span');
						choice__span6.innerHTML = filterHTML[i].pl.php;
						choice__li6.appendChild(choice__span6);		

						choice__li7 = document.createElement('li');
						choice__li7.innerHTML = 'python:'
						chioce__ul1.appendChild(choice__li7);

						choice__span7 = document.createElement('span');
						choice__span7.innerHTML = filterHTML[i].pl.python;
						choice__li7.appendChild(choice__span7);	

						choice__li8 = document.createElement('li');
						choice__li8.innerHTML = 'ruby:'
						chioce__ul1.appendChild(choice__li8);

						choice__span8 = document.createElement('span');
						choice__span8.innerHTML = filterHTML[i].pl.ruby;
						choice__li8.appendChild(choice__span8);	

						choice__li9 = document.createElement('li');
						choice__li9.innerHTML = 'html:'
						chioce__ul1.appendChild(choice__li9);

						choice__span9 = document.createElement('span');
						choice__span9.innerHTML = filterHTML[i].pl.html;
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
						choice__span1.innerHTML = filterHTML[i].db.sql;
						choice__li1.appendChild(choice__span1);

						choice__li2 = document.createElement('li');
						choice__li2.innerHTML = 'oracle:'
						choice__ul2.appendChild(choice__li2);

						choice__span2 = document.createElement('span');
						choice__span2.innerHTML = filterHTML[i].db.oracle;
						choice__li2.appendChild(choice__span2);

						choice__li3 = document.createElement('li');
						choice__li3.innerHTML = 'mysql:'
						choice__ul2.appendChild(choice__li3);

						choice__span3 = document.createElement('span');
						choice__span3.innerHTML = filterHTML[i].db.mysql;
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
						choice__span1.innerHTML = filterHTML[i].os.android;
						choice__li1.appendChild(choice__span1);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'ios:'
						choice__ul3.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = filterHTML[i].os.ios;
						choice__li1.appendChild(choice__span1);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'unix:'
						choice__ul3.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = filterHTML[i].os.unix;
						choice__li1.appendChild(choice__span1);

						choice__li1 = document.createElement('li');
						choice__li1.innerHTML = 'windows:'
						choice__ul3.appendChild(choice__li1);

						choice__span1 = document.createElement('span');
						choice__span1.innerHTML = filterHTML[i].os.windows;
						choice__li1.appendChild(choice__span1);				
			
			}
		}
		
		


/*
searching for login 
*/
		var search = document.getElementById('choice__search');


		search.oninput  = function find(val) {
			var val = search.value;
		  	for(var i = 0; i< json.length; i++) {
		    	if (json[i].login == val) 

				var result = json[i];


			}
			refresh();

			
				var search__output = document.getElementById('search__output')
				var choice__candidate = document.createElement('div');
				choice__candidate.className = 'choice__candidate';
				search__output.appendChild(choice__candidate);	

				var choice__login = document.createElement('div');
				choice__login.className = 'choice__login';
				choice__login.innerHTML = result.id +'. '+ result.login;
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
				choice__span1.innerHTML = result.pl.c;
				choice__li1.appendChild(choice__span1);


				choice__li2 = document.createElement('li');
				choice__li2.innerHTML = 'c/c++:'
				chioce__ul1.appendChild(choice__li2);

				choice__span2 = document.createElement('span');
				choice__span2.innerHTML = result.pl.c_;
				choice__li2.appendChild(choice__span2);

				choice__li3 = document.createElement('li');
				choice__li3.innerHTML = 'delphi:'
				chioce__ul1.appendChild(choice__li3);

				choice__span3 = document.createElement('span');
				choice__span3.innerHTML = result.pl.delphi;
				choice__li3.appendChild(choice__span3);


				choice__li4 = document.createElement('li');
				choice__li4.innerHTML = 'java:'
				chioce__ul1.appendChild(choice__li4);

				choice__span4 = document.createElement('span');
				choice__span4.innerHTML = result.pl.java;
				choice__li4.appendChild(choice__span4);

				choice__li5 = document.createElement('li');
				choice__li5.innerHTML = 'js:'
				chioce__ul1.appendChild(choice__li5);

				choice__span5 = document.createElement('span');
				choice__span5.innerHTML = result.pl.js;
				choice__li5.appendChild(choice__span5);						

				choice__li6 = document.createElement('li');
				choice__li6.innerHTML = 'php:'
				chioce__ul1.appendChild(choice__li6);

				choice__span6 = document.createElement('span');
				choice__span6.innerHTML = result.pl.php;
				choice__li6.appendChild(choice__span6);		

				choice__li7 = document.createElement('li');
				choice__li7.innerHTML = 'python:'
				chioce__ul1.appendChild(choice__li7);

				choice__span7 = document.createElement('span');
				choice__span7.innerHTML = result.pl.python;
				choice__li7.appendChild(choice__span7);	

				choice__li8 = document.createElement('li');
				choice__li8.innerHTML = 'ruby:'
				chioce__ul1.appendChild(choice__li8);

				choice__span8 = document.createElement('span');
				choice__span8.innerHTML = result.pl.ruby;
				choice__li8.appendChild(choice__span8);	

				choice__li9 = document.createElement('li');
				choice__li9.innerHTML = 'html:'
				chioce__ul1.appendChild(choice__li9);

				choice__span9 = document.createElement('span');
				choice__span9.innerHTML = result.pl.html;
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
				choice__span1.innerHTML = result.db.sql;
				choice__li1.appendChild(choice__span1);

				choice__li2 = document.createElement('li');
				choice__li2.innerHTML = 'oracle:'
				choice__ul2.appendChild(choice__li2);

				choice__span2 = document.createElement('span');
				choice__span2.innerHTML = result.db.oracle;
				choice__li2.appendChild(choice__span2);

				choice__li3 = document.createElement('li');
				choice__li3.innerHTML = 'mysql:'
				choice__ul2.appendChild(choice__li3);

				choice__span3 = document.createElement('span');
				choice__span3.innerHTML = result.db.mysql;
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
				choice__span1.innerHTML = result.os.android;
				choice__li1.appendChild(choice__span1);

				choice__li1 = document.createElement('li');
				choice__li1.innerHTML = 'ios:'
				choice__ul3.appendChild(choice__li1);

				choice__span1 = document.createElement('span');
				choice__span1.innerHTML = result.os.ios;
				choice__li1.appendChild(choice__span1);

				choice__li1 = document.createElement('li');
				choice__li1.innerHTML = 'unix:'
				choice__ul3.appendChild(choice__li1);

				choice__span1 = document.createElement('span');
				choice__span1.innerHTML = result.os.unix;
				choice__li1.appendChild(choice__span1);

				choice__li1 = document.createElement('li');
				choice__li1.innerHTML = 'windows:'
				choice__ul3.appendChild(choice__li1);

				choice__span1 = document.createElement('span');
				choice__span1.innerHTML = result.os.windows;
				choice__li1.appendChild(choice__span1);
			// }

		  // }
			
		}





/*
sort top  for front-end items 
*/
		document.getElementById('fe_top').onclick = function() {

			refresh();

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

			refresh();

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

			refresh();


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

			refresh();


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
Pagination 
*/


		document.getElementById('full_list').onclick = function() {

			document.getElementById('choiceOS').innerHTML = "";
			document.getElementById('choiceDB').innerHTML = "";
			document.getElementById('choicePL').innerHTML = "";
			document.getElementById('choiceFE').innerHTML = "";
			document.getElementById('resultFilter').innerHTML = "";
			document.getElementById('search__output').innerHTML = "";
			btn_prev.style.visibility = "visible";
		  	btn_next.style.visibility = "visible";
		  	document.getElementById('page').innerHTML =  current_page +' page';
			document.getElementById('candidates').classList.remove('hidden');  	


		}

		var current_page = 1;
		var records_per_page = 5;
		var btn_next = document.getElementById("btn_next");
	    var btn_prev = document.getElementById("btn_prev");
	    var candidates = document.getElementById("candidates");
	    var page_span = document.getElementById("page");

		btn_prev.onclick = function prevPage() {

		    if (current_page > 1) {
		        current_page--;
		        changePage(current_page);
		       
		    }
		}

		btn_next.onclick =function nextPage() {
		    if (current_page < numPages()) {
		        current_page++;
		        changePage(current_page);

		    }
		}
    
		function changePage(page) {
		    // Validate page
		    if (page < 1) page = 1;
		    if (page > numPages()) page = numPages();

		    document.getElementById("candidates").innerHTML = "";

		    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
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

		    page_span.innerHTML = page + ' page';

		    if (page == 1) {
		        btn_prev.style.visibility = "hidden";
		    } else {
		        btn_prev.style.visibility = "visible";
		    }

		    if (page == numPages()) {
		        btn_next.style.visibility = "hidden";
		    } else {
		        btn_next.style.visibility = "visible";
		    }
		}

		function numPages() {
		    return Math.ceil(json.length / records_per_page);
		}

		window.onload = function() {
		    changePage(1);
		};
	}

}

req.open('get', 'http://localhost:3000/data.json');
req.send();




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


var contact = document.getElementById('contact');

var contact__info = document.createElement('div');
contact__info.className = 'contact__info';
contact.appendChild(contact__info);

var ul__contact = document.createElement('ul');
contact__info.appendChild(ul__contact);

var li1__contact = document.createElement('li');
ul__contact.appendChild(li1__contact);

a1__contact = document.createElement('a');
a1__contact.href = '#';
a1__contact.target = '_blank';
a1__contact.innerHTML = '<i class="fas fa-home"></i> Irpin, Antonov str.';
li1__contact.appendChild(a1__contact);

var li2__contact = document.createElement('li');
ul__contact.appendChild(li2__contact);

a2__contact = document.createElement('a');
a2__contact.href = '#';
a2__contact.target = '_blank';
a2__contact.innerHTML = '<i class="fas fa-phone-square"></i> tel: (099) 034 55 62';
li2__contact.appendChild(a2__contact);

var li3__contact = document.createElement('li');
ul__contact.appendChild(li3__contact);

a3__contact = document.createElement('a');
a3__contact.href = '#';
a3__contact.target = '_blank';
a3__contact.innerHTML = '<i class="far fa-envelope"></i> level@gmail.com';
li3__contact.appendChild(a3__contact);

var li4__contact = document.createElement('li');
ul__contact.appendChild(li4__contact);

a4__contact = document.createElement('a');
a4__contact.href = 'https://www.facebook.com/profile.php?id=100009540698056&ref=bookmarks';
a4__contact.target = '_blank';
a4__contact.innerHTML = '<i class="fab fa-facebook-square"></i> facebook.com/level';
li4__contact.appendChild(a4__contact);

var li5__contact = document.createElement('li');
ul__contact.appendChild(li5__contact);

a5__contact = document.createElement('a');
a5__contact.href = 'https://t.me/tony2night';
a5__contact.target = '_blank';
a5__contact.innerHTML = '<i class="fab fa-telegram"></i> t.me/level';
li5__contact.appendChild(a5__contact);

var li6__contact = document.createElement('li');
ul__contact.appendChild(li6__contact);

a6__contact = document.createElement('a');
a6__contact.href = 'https://www.instagram.com/kulbashnyi.a/';
a6__contact.target = '_blank';
a6__contact.innerHTML = '<i class="fab fa-instagram"></i> insta/level';
li6__contact.appendChild(a6__contact);


var contact__map = document.createElement('div');
contact__map.className = 'contact__map';
contact.appendChild(contact__map);






// Initialize and add the map
function initMap() {
  var uluru = {lat: 50.5210682, lng: 30.2492746};
  var map = new google.maps.Map(
      document.querySelector('.contact__map'), 
      {zoom: 15, center: uluru});
  var marker = new google.maps.Marker({
  	position: uluru, 
  	map: map,
  	title: 'level',
  	icon: {
		url: "img/marker.png",
		scaledSize: new google.maps.Size(64, 64)
	}
  });
}
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
/*
hide start window for show main site content
*/
function hide_start() {
	var start = document.querySelector('.start');
	start.style.display='none';
}



/*
function to add classes for manager view
*/
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


	document.getElementById('dif').href = "#choice";

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

/*
function to add classes for programmer view
*/
function show_programmer() {

	const main = document.querySelector('.main');
	const aboutUs_programmer = document.querySelector('.aboutUs');
	const slider_programmer = document.querySelector('.sliderPage');
	const gallery_programmer = document.querySelector('.gallery');
	const contact_programmer = document.querySelector('.contact__info');

	document.getElementById('dif').href = "#skills";

	
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



