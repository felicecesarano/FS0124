/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 30;

console.log('ESERCIZIO A');
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21)

console.log('ESERCIZIO B');
console.log(random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: 'Felice',
  surname: 'Cesarano',
  age: 23,
}

console.log('ESERCIZIO C');
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log('ESERCIZIO D');
console.log(me);


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['HTML', 'CSS', 'JS'];

console.log('ESERCIZIO E');
console.log(me);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Base');

console.log('ESERCIZIO F');
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log('ESERCIZIO G');
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  let casual = Math.floor(Math.random() * 6);
  return casual + 1;
}

console.log('ESERCIZIO 1');
console.log(dice());


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
let x;
let z;

function whoIsBigger(x, z) {
  if (x > z) {
    console.log(x + ' è maggiore di ' + z)
  } else if (z > x) {
    console.log(z + ' è maggiore di ' + x)
  } else {
    console.log(x + ' e ' + z + ' sono uguali');
  }
}
console.log('ESERCIZIO 2');
whoIsBigger(5, 4);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

let stringa = '';

function splitMe(stringa) {
  let split = stringa.split(' ');
  return split;
}

console.log('ESERCIZIO 3');
console.log(splitMe('I love coding'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

let str = '';
let bool;

function deleteOne(str, bool) {
  if (bool === true) {
    console.log(str.slice(1));
  } else {
    console.log(str.slice(0, -1));
  }
}

console.log('ESERCIZIO 4');
deleteOne('Felice', true);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

let nuovaStr = '';

function onlyLetters(nuovaStr) {
  let togliNumero = nuovaStr.replace(/[0-9]/g, '')
  return togliNumero;
}

console.log('ESERCIZIO 5');
console.log(onlyLetters('I have 4 dogs'));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

let newStr = '';
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isThisAnEmail(newStr) {
  return regex.test(newStr);
}

console.log('ESERCIZIO 6');
console.log(isThisAnEmail('cesarano.fc@gmail.com'));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  let giorno = new Date();
  giornoSett = giorno.getDay();
  switch (giornoSett) {
    case 0:
      console.log('Domenica');
      break;
    case 1:
      console.log('Lunedì');
      break;
    case 2:
      console.log('Martedì');
      break;
    case 3:
      console.log('Mercoledì');
      break;
    case 4:
      console.log('Giovedì');
      break;
    case 5:
      console.log('Venerdì');
      break;
    case 6:
      console.log('Sabato');
      break;
  }
}

console.log('ESERCIZIO 7');
whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
let number;

function rollTheDices(number) {
  let sum = 0;
  let values = [];
  for (let i = 0; i < number; i++) {
    let totale = dice();
    sum += totale;
    values.push(totale);
  }
  return {
    sum: sum,
    values: values
  };
}

console.log('ESERCIZIO 8')
console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data) {
  let dataScelta = new Date(data);
  let oggi = new Date();
  let diff = oggi - dataScelta;
  let giorniTras = Math.floor(diff / (1000 * 60 * 60 * 24));
  return giorniTras;
}

console.log('ESERCIZIO 9');
console.log(howManyDays('2024-01-07'));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(compleanno) {
  let oggi = new Date();
  let dataCompleanno = new Date(compleanno);
  if (oggi.getMonth() === dataCompleanno.getMonth() && oggi.getDate() === dataCompleanno.getDate()) {
    return true;
  } else {
    return false;
  }
}
console.log('ESERCIZIO 10');
console.log(isTodayMyBirthday('12-21'));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let ogge = {};
let str3 = '';

function deleteProp(ogge, str3) {
  if (ogge[str3] !== undefined) {
    delete ogge[str3];
  }
  return ogge;
}

console.log('ESERCIZIO 11')
console.log(deleteProp(movies[2], 'Type'));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(movies) {
  let film = movies[0];
  movies.forEach((element) => {
    if (element.Year > film.Year) {
      film = element;
    }
  });
  return film;
}

console.log('ESERCIZIO 12')
console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(movies) {
  return movies.length;
}

console.log('ESERCIZIO 13')
console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(movies) {
  const anni = movies.map((element) => element.Year);
  return anni;
}

console.log('ESERCIZIO 14');
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(movies) {
  const anno = new Date().getFullYear();
  const annoFilm = movies.filter((element) => element.Year <= anno - 24);
  return annoFilm;
}

console.log('ESERCIZIO 15')
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(movies) {
  const totaleAnni = movies.reduce((totale, anno) => totale + Number(anno.Year), 0);
  return totaleAnni;
}

console.log('ESERCIZIO 16')
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(movies, title) {
  const cercaFilm = movies.filter((element) => element.Title.toLowerCase().indexOf(title) !== -1);
  return cercaFilm;
}

console.log('ESERCIZIO 17')
console.log(searchByTitle(movies, 'the lord'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

let str4 = '';

function searchAndDivide(movies, str4) {
  let match = movies.filter((element) => element.Title.toLowerCase().indexOf(str4) !== -1);
  let unmatch = movies.filter((element) => element.Title.toLowerCase().indexOf(str4) == -1);
  return { match, unmatch };
}

console.log('ESERCIZIO 18')
console.log(searchAndDivide(movies, 'avengers'))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

let num;

function removeIndex(movies, num) {
  movies.splice(num, 1);
  return movies;
}

console.log('ESERCIZIO 19')
console.log(removeIndex(movies, 13));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function seleziona() {
  return document.getElementById('container').innerText = 'Ho selezionato l\'id'
}

console.log('ESERCIZIO 20');
console.log(seleziona());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selezionaTd() {
  return document.querySelectorAll('td')
}

console.log('ESERCIZIO 21');
console.log(selezionaTd());


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function testoTd() {
  let td = document.querySelectorAll('td');
  td.forEach((element) => {
    console.log(element.textContent);
  })
}

console.log('ESERCIZIO 22');
(testoTd());

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function red() {
  let link = document.querySelectorAll('a');
  link.forEach((element) => {
    element.style.backgroundColor = 'red';
  });
}

red(),
  console.log('ESERCIZIO 23');
console.log('LINK ROSSI');

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungiId() {
  let lista = document.getElementById('myList');
  let li = document.createElement('li');
  li.textContent = 'Ho aggiunto un nuovo elemento alla lista'
  lista.appendChild(li)
}

aggiungiId()
console.log('ESERCIZIO 24');
console.log('Elemento Aggiunto');

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuota() {
  let lista = document.getElementById('myList');
  lista.innerHTML = '';
}
svuota();

console.log('ESERCIZIO 25');
console.log('Lista Svuotata');

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClass() {
  let tr = document.querySelectorAll('tr');
  tr.forEach((element) => {
    element.classList.add('test');
  })
}
aggiungiClass();

console.log('ESERCIZIO 26');
console.log('Classe Aggiunta');

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
let altezza;

function halfTree(altezza) {
  for (let i = 1; i <= altezza; i++) {
    let riga = '';
    for (let x = 1; x <= i; x++) {
      riga += '*';
    }
    console.log(riga);
  }
}

console.log('ESERCIZIO 27');
halfTree(3);


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

let altezza2;

function tree(altezza2) {
  for (let i = 0; i < altezza2; i++) {
      let altezzaAlbero = ' '.repeat(altezza2 - i - 1) + '*'.repeat(2 * i + 1);
      console.log(altezzaAlbero);
  }
};

console.log('ESERCIZIO 28')
tree(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

let num2;

function isItPrime(num2) {
  for (let i = 2; i < num2; i++) {
    if ( num2 <= 1 || num2 % i === 0){
      return false;
    }
  }
  return true;
}
console.log('ESERCIZIO 29');
console.log(isItPrime(10));