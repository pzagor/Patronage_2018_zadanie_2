

 import setCounterOfTo from './movies-counter.js';
 import MoviesStorage from './movies-storage.js';

let mvStorage  = new MoviesStorage();


function updateSeenMovies (elmnt) {

		var movies = mvStorage.get();

     console.log("it: " + elmnt.getAttribute('it'));
     let itt = elmnt.getAttribute('it');
    console.log("it: " + movies[itt].seen);
     if (movies[itt].seen == 'T') {
     	movies[itt].seen = "F";
     	console.log("seen_set to false");
     }
     else{
     	movies[itt].seen = "T";
     	console.log("seen_set to true");
     };
     updateImg(elmnt);
     updateViewed();

	
}
function updateSeenMovies2 (evt) {
		
	var elmnt2 =	evt.target;
    let movies = mvStorage.get();
    var itt = elmnt2.getAttribute('it');
    if (movies[itt].seen == 'T') {
     	movies[itt].seen = "F";
     	elmnt2.style.backgroundColor = "red";
     }
     else{
     	movies[itt].seen = "T";
     	elmnt2.style.backgroundColor = "green";
     };
     updateImg(elmnt2);
     updateViewed();

}


    function updateAllCounter ( ){

        let counter = mvStorage.get().length;
         var mvcounter = document.getElementById("moviesCounterAll");
         setCounterOfTo(mvcounter, counter);
    }

	function updateImg(elmnt) {
		let itt = elmnt.getAttribute('it');

		if (mvStorage.get()[itt].seen == 'T') {
			elmnt.style.backgroundColor = "green";

		}
		else {
			elmnt.style.backgroundColor = "red";
		}
	}

	function updateViewed(){
		let counterViewed = 1;
                // let movies = mvStorage.get();

		for(var iter in mvStorage.get()) {
			
			if (mvStorage.get()[iter].seen == 'T')
				counterViewed++;
		}
		 var mvcounterSeen = document.getElementById("moviesCounterSeen");
 		 setCounterOfTo(mvcounterSeen, counterViewed);
	}

    function writeHTML(){
        let mvs = mvStorage.get();
        var ul = document.getElementById("moviesList");
        for(var i in mvs) {
        	var li = document.createElement('li');

    		var title = document.createTextNode("Title: " + mvs[i].title);
    		var year = document.createTextNode("Year: " + mvs[i].year); 
    		var genre = document.createTextNode("Genre: " + mvs[i].genre); 
    		var summary = document.createTextNode(mvs[i].summary); 
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

    		oImg.setAttribute('it', i);
    		 var elem = document.getElementById("moviesCounterAll");

    		 oImg.addEventListener ("click", updateSeenMovies2, false);
    		 
    		 updateImg(oImg);


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

  ul.appendChild(li); 
}
}

writeHTML();
updateAllCounter();
updateViewed();







