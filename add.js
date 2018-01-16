
 import setCounterOfTo from './movies-counter.js';
 import MoviesStorage from './movies-storage.js';


class Add {
	constructor() {
	console.log("djankjdsakjdnd" + document.getElementById("Year").value);

	document.getElementById("Submit").addEventListener("click", function() {
    this.submitMovie();
});

 	this.mvStorage  = new MoviesStorage();
 	this.updateViewed();
	this.updateAllCounter();

}

    submitMovie(){
	console.log("djankjdsakjdnd" + document.getElementById("Year").value);

    }

     addMovie() {

		this.valGenre();
		this.valYear();
		this.valTitle();

	}

	valGenre() {

	    if (document.getElementById("Genre").value == "") {
	        this.myErrorMessages.push("Please fill the genre field.");
	        return false;
	    } else {
	    	return true;
	    };
	};


	valYear() {

		let fieldLength = year.value.length;
		let regpatt = /^[0-9]{4}$/;  
		      	
		if(document.getElementById("Year").value.match(regpatt)) {  
			return true;  
		} else {  
			this.myErrorMessages.push("Year must be four digits.");
			return false;  
		};		
	};

	valTitle() {

	};

		 updateAllCounter ( ){
			 let counter = this.mvStorage.get().length;

			 var mvcounter = document.getElementById("anotherMoviesCounterAll");
			 setCounterOfTo(mvcounter, counter);
		}

	  	updateViewed(){
			let counterViewed = 1;

			for(var iter in this.mvStorage.get()) {
			
				if (this.mvStorage.get()[iter].seen == 'T')
				counterViewed++;
		}
		 var mvcounterSeen = document.getElementById("anotherMoviesCounterSeen");
 		 setCounterOfTo(mvcounterSeen, counterViewed);
	}
}

let myAdd = new Add();

