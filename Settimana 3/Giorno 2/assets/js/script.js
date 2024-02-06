/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concatena(stringa1, stringa2) {
  const converti = `${stringa1.slice(0,2)}${stringa2.slice(-3)}`.toUpperCase();
  document.getElementById('ese1').innerHTML = converti;
}

concatena('Felice','Cesarano');

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function arrayNumeri() {
  const numeri = [];
  for (let i = 0; i < 10; i++) {
    numeri.push(Math.floor(Math.random() * 101));
  }
  return numeri;
}

document.getElementById('ese2').innerHTML = arrayNumeri();

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

function trova(numeri) {
  const numeriPari = numeri.filter((element) => element % 2 === 0);
  return numeriPari;
}
const arrayNume = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById('ese3').innerHTML = trova(arrayNume);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaArray() {
  let somma = 0;
  arrayNume.forEach((element) => {
    somma += element;
  });
  return somma;
}

document.getElementById('ese4').innerHTML = sommaArray();

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function arraySomma() {
  const somma = arrayNume.reduce((e, element) => e + element, 0);
  return somma;
}

document.getElementById('ese5').innerHTML = arraySomma(arrayNume);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function incrementa(arrayNume, n) {
  const result = arrayNume.map((element) => element + n);
  return result;
}

document.getElementById('ese6').innerHTML = incrementa(arrayNume, 3);


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const stringhe = ['EPICODE', 'is', 'great'];

function lunghezza() {
const stringa = stringhe.map((element) => element.length);
return stringa;
}

document.getElementById('ese7').innerHTML = lunghezza(stringhe);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function dispari() {
  const numeriDispari = [];
  for (let i = 1; i <= 99; i +=2) {
    numeriDispari.push(i);
  }
  return numeriDispari;
}

document.getElementById('ese8').innerHTML = dispari();

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function trova(movies) {
  let film = movies[0];
  movies.forEach((element) => {
    if (element.Year < film.Year) {
      film = element;
    }
  });
  return film;
}

document.getElementById('ese9').innerHTML =  'Controllare console';
console.log(trova(movies))

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function qty(movies) {
  return movies.length;
}

document.getElementById('ese10').innerHTML = qty(movies);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function titoli(movies) {
  const titoliFilm = movies.map((element) => element.Title);
  return titoliFilm;
}
document.getElementById('ese11').innerHTML = titoli(movies);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function millennio(movies) {
  const anno = new Date().getFullYear();
  const annoFilm = movies.filter((element) => element.Year >= anno - 24);
  return annoFilm;
}

document.getElementById('ese12').innerHTML =  'Controllare console';
console.log(millennio(movies));

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function sommaAnni(movies) {
  const totaleAnni = movies.reduce((totale, anno) => totale + Number(anno.Year), 0);
  return totaleAnni;
}

document.getElementById('ese13').innerHTML = sommaAnni(movies);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function cerca(movies, imdbID) {
  const cercaFilm = movies.find((element) => element.imdbID === imdbID);
  return cercaFilm;
}

document.getElementById('ese14').innerHTML = 'Controllare console';
console.log(cerca(movies,'tt0057261'));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

function annoUscita(movies, anno) {
  const indiceAnno = movies.findIndex((element) => element.Year === anno);
  return indiceAnno;
}

document.getElementById('ese15').innerHTML = annoUscita(movies, '1963');
