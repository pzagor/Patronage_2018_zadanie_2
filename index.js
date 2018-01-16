

 import setCounterOfTo from './movies-counter.js';
 import MoviesStorage from './movies-storage.js';

let mvStorage  = new MoviesStorage();

console.log("mvs111: " + mvStorage.get());

function length(obj){
    return Object.keys(obj).length
};







// selects the div with an id of placeholder
// var div = document.getElementById('placeholder');

// say that fruits contains all your data
// var fruits = ['Apples','Bananas','Pineapples','Peaches','Grapes'],
    // ul = document.createElement('ul'); // create an arbitrary ul element


function updateSeenMovies (elmnt) {
		// img = document.getElementById("id_" + i);
     // elmnt.alt = alt;
     // elmnt.src = "eye_no.svg";
  //    		elmnt.setAttribute('height', '100');
		// elmnt.setAttribute('width', '100');
		
     console.log("it: " + elmnt.getAttribute('it'));
     let itt = elmnt.getAttribute('it');
    console.log("it: " + movies[itt].seen);
     if (movies[itt].seen == 'T') {
     	movies[itt].seen = "F";
     	console.log("seen_set to false");
     	// elmnt.style.backgroundColor = "red";
     }
     else{
     	movies[itt].seen = "T";
     	console.log("seen_set to true");
     	// elmnt.style.backgroundColor = "green";
     };
     updateImg(elmnt);
     updateViewed();

	// // for(var i in movies) {
	// 		if(movies[i].seen === 'T'){ //true change to false
	// 			movies[i].seen = "F";
	// 			this
	// 		} 
	// 		else {   //false change to true

	// 		}
	// 	};

	// }
}
function updateSeenMovies2 (evt) {
		// img = document.getElementById("id_" + i);
     // elmnt.alt = alt;
     // elmnt.src = "eye_no.svg";
  //    		elmnt.setAttribute('height', '100');
		// elmnt.setAttribute('width', '100');
	var elmnt2 =	evt.target;
      // console.log("it: " + elmnt2);


     console.log("it: " + elmnt2.getAttribute('it'));
     var itt = elmnt2.getAttribute('it');
    // console.log("it: " + movies[itt].seen);
     if (movies[itt].seen == 'T') {
     	movies[itt].seen = "F";
     	console.log("seen_set to false");
     	elmnt2.style.backgroundColor = "red";
     }
     else{
     	movies[itt].seen = "T";
     	console.log("seen_set to true");
     	elmnt2.style.backgroundColor = "green";
     };
     updateImg(elmnt2);
     updateViewed();

	// // for(var i in movies) {
	// 		if(movies[i].seen === 'T'){ //true change to false
	// 			movies[i].seen = "F";
	// 			this
	// 		} 
	// 		else {   //false change to true

	// 		}
	// 	};
}
	// }




	function updateImg(elmnt) {
		let itt = elmnt.getAttribute('it');

		if (movies[itt].seen == 'T') {
			elmnt.style.backgroundColor = "green";

		}
		else {
			elmnt.style.backgroundColor = "red";
		}
	}

	function updateViewed(){
		let counterViewed = 1;
		for(var iter in movies) {
			
			if (movies[iter].seen == 'T')
				counterViewed++;
		}
		 var mvcounterSeen = document.getElementById("moviesCounterSeen");
 		 setCounterOfTo(mvcounterSeen, counterViewed);
	}



var ul = document.getElementById("moviesList");
// loop through the fruits array
for(var i in movies) {
        // create an arbitrary li element
	var li = document.createElement('li');

		var title = document.createTextNode("Title: " + movies[i].title);
		var year = document.createTextNode("Year: " + movies[i].year); 
		var genre = document.createTextNode("Genre: " + movies[i].genre); 
		var summary = document.createTextNode(movies[i].summary); 
		// console.log("i: " + i);

		var ul1 = document.createElement('ul');

		var li1 = document.createElement('li');
		var li2 = document.createElement('li');
		var li3 = document.createElement('li');
		var li4 = document.createElement('li');
		var li5 = document.createElement('li');

		var oImg = document.createElement("img");
		oImg.setAttribute('src', 'eye.svg');
		oImg.setAttribute('id', 'img_' + i);
		oImg.setAttribute('alt', 'na');
		// oImg.setAttribute('height', '100');
		// oImg.setAttribute('width', '100');
		oImg.setAttribute('it', i);
		// oImg.onclick = function() { changeImage() };
		// oImg.setAttribute("onclick", "updateSeenMovies();");
		// oImg.addEventListener("onclick", function() {
  //   updateSeenMovies(i);
  		// var itt = i;


		 var elem = document.getElementById("moviesCounterAll");
		 // setCounterOfTo(elem, 55);

		 // oImg.setAttribute('onclick', 'setCounterOfTo(elem, 55);');
		// oImg.setAttribute.onclick = function() { setCounterOfTo(elem, 22); };
		// oImg.setAttribute.onclick = function() { updateSeenMovies(this); };

		 // oImg.setAttribute('onclick', 'updateSeenMovies(this);');
		 oImg.addEventListener ("click", updateSeenMovies2, false);
		 
		 updateImg(oImg);
// });
		// document.body.appendChild(oImg);

  		li1.appendChild(title); 
  		li2.appendChild(year);
  		li3.appendChild(genre);
  		li4.appendChild(summary);
  		li5.appendChild(oImg);

  		ul1.appendChild(li1);
		ul1.appendChild(li2);
		ul1.appendChild(li3);
		ul1.appendChild(li4);
		ul1.appendChild(li5);

		li.appendChild(ul1);


  // li.appendChild(content); // append the created textnode above to the li element
  ul.appendChild(li); // append the created li element above to the ul element
}
updateViewed();

let counter = length(movies);
console.log(movies);
// foreach(movies as movie){

// }
// for (var i = 0, len = movies.length; i < len; i++) {
//   countSeen(movies[i]);
// }

 var mvcounter = document.getElementById("moviesCounterAll");
 setCounterOfTo(mvcounter, counter);








// document.getElementById("moviesCounterAll").innerHTML = counter;

// import {setCounterOfTo} from 'movies-counter';
// import Movies-counter from 'movies-counter';
// import setCounterOfTo from './movies-counter.js';

// var elem = document.getElementById("moviesCounterAll");
// setCounterOfTo(elem, 55);
    // function updateSeenMovies() {
    // 	getElementById("moviesList");
        
    // }




// div.appendChild(ul); // finally the ul element to the div with an id of placeholder