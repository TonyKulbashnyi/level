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


