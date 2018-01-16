
	var movies2 =[];
		movies2 = [
			    {
			        "id": 1,
			        "title": "The Shawshank Redemption",
			        "year": 1994,
			        "genre": "drama",
			        "summary": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
			        "seen": "T"
			    },
			    {
			        "id": 2,
			        "title": "The Godfather",
			        "year": 1972,
			        "genre": "crime",
			        "summary": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
			        "seen": "T"
			    },
			    {
			        "id": 3,
			        "title": "The Dark Knight",
			        "year": 2008,
			        "genre": "action",
			        "summary": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
			        "seen": "T"
			    },
			    {
			        "id": 5,
			        "title": "12 Angry Men",
			        "year": 1957,
			        "genre": "drama",
			        "summary": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
			        "seen": "F"
			    },
			    {
			        "id": 8,
			        "title": "Schindler's List",
			        "year": 1993,
			        "genre": "biography",
			        "summary": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
			        "seen": "F"
			    },
			    {
			        "id": 13,
			        "title": "Pulp Fiction",
			        "year": 1994,
			        "genre": "crime",
			        "summary": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
			        "seen": "T"
			    },
			    {
			        "id": 21,
			        "title": "The Good, the Bad and the Ugly",
			        "year": 1966,
			        "genre": "western",
			        "summary": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
			        "seen": "F"
			    }
				];

export default class MoviesStorage {


	constructor(){
		myStorage = localStorage;
		var mvs = localStorage.getItem('movies');
		console.log('mvs: ' + mvs);

		var movies = [];
		var myStorage = localStorage;
		var mvs = localStorage.getItem('movies');
		console.log('mvs: ' + mvs);
		if (Array.isArray(mvs))
		{
		console.log('isArray');

		}
		else
		{
		    console.log('isnotArray');
		localStorage.setItem('movies', movies2);
		}

	};

	//konstruktor

	// movies czy jest tablica
	//jesli nie wrzuc tam jsona z data

	// get()` - zwraca listę wszystkich filmów

	 get() {
		 return movies;
	}

	// ii. `get(id)` - zwraca obiekt filmu o podanym id
	 get(id){
		//petla po movies z szukaniem tegoz id
		// to na pewwno ladniej sie da zrobic ale jak? poszperac podpytac
		for (var i = movies.length - 1; i >= 0; i--) {

			if(movies.id = id){

			}
		}
	}


// iii. `set(data)` - dodaje nowy film do tablicy filmów

	 set(data) {
		movies.add(data) // walidacja jakas?
	 }

// iv. `set(id, data)` - aktualizuje film o danym id o dane

	 set(id, data) {
		
	} 

// v. `remove(id)` - usuwa film o podanym id

	 remove(id) {
		
	} 

// v. `remove(id)` - usuwa film o podanym id

}




// Jest odpowiedzialny za operowanie na filmach, a jako że zmienna `moviesData` 
// już nie istnieje, wszystkie miejsca w twoje aplikacji powinny być odpowiednio zrefaktorowane.
// oswiezanie listy po kliknieciu oraz czytanie 