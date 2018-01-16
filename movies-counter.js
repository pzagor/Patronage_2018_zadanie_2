// Utwórz plik `movies-counter.js` z definicją funkcji `setCounterOfTo`. Funkcja powinna:
// a. Przyjmować dwa argumenty, element oraz wartość jaka powinna być w nim umieszczona.
// b. Być użyta do ustawienia wartości liczników w całej aplikacji.
// c. Być domyślnie eksportowana.
// 5. Utwórz plik `movies-storage.js` z definicją klasy MoviesStorage. Klasa powinna być domyślnie eksportowana.

export default function setCounterOfTo(el, val) {
	el.innerHTML  = val;
}
