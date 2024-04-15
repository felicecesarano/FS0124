/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']


function stampPets(stamp) {
  for (let i = 0; i < stamp.length; i++) {
    console.log(stamp[i]);
  }
}
console.log('ESERCIZIO 1')
stampPets(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

function ordine() {
  return pets.sort();
}

console.log('ESERCIZIO 2')
console.log(ordine());
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

function inverti() {
  return pets.reverse();
}

console.log('ESERCIZIO 3');
console.log(inverti());
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

function sposta() {
  let frist = pets.shift();
  let last = pets.pop();
  pets.push(frist);
  pets.unshift(last);
  return console.log(pets);
}
console.log('ESERCIZIO 4');
sposta();

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

function aggiungi(license) {
  license.licensePlate = "";
  return license;
}
const newLicense = ['GT456TR', 'ER738SD', 'FG987OP']
for (let i = 0; i < cars.length; i++) {
  cars[i] = aggiungi(cars[i])
  cars[i].licensePlate = newLicense[i];
}


console.log('ESERCIZIO 5');
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

function autoNuova() {
  let newCar = {
    brand: 'Ferrari',
    model: 'Purosangue',
    color: 'Red',
    trims: ['allure', 'Carbon fibre', 'Alutex Console'],
    licensePlate: 'GH345DT',
  }
  cars.push(newCar);
  for (let i = 0; i < cars.length; i++) {
    const ultimoTrim = cars[i];
    ultimoTrim.trims.pop();
    cars[i] = ultimoTrim
  }
}
autoNuova()
console.log('ESERCIZIO 6')
console.log(cars)
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

function primoTrims() {
  for (let i = 0; i < cars.length; i++){
    justTrims.push(cars[i].trims[0]);
  }
}
primoTrims()
console.log('ESERCIZIO 7');
console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

function valori(){
  for (let i = 0; i < cars.length; i++){
    const primaLettera = cars[i].color[0]
    if (primaLettera === 'b'){
      console.log('Fizz');
    } else {
      console.log('Buzz')
    }
  }
}
console.log('ESERCIZIO 8')
valori()

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

function ciclo() {
  let i = 0;
  while (numericArray[i] !== 66){
    console.log(numericArray[i]);
    i++;
  }
}
console.log('ESERCIZIO 9')
ciclo()
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

function lettera(){
  const alfabeto = [];
  for (let i = 0; i < charactersArray.length; i++){
    switch (charactersArray[i]){
      case 'a': alfabeto.push(1);
      break;
      case 'b': alfabeto.push(2);
      break;
      case 'c': alfabeto.push(3);
      break;
      case 'd': alfabeto.push(4);
      break;
      case 'e': alfabeto.push(5);
      break;
      case 'f': alfabeto.push(6);
      break;
      case 'g': alfabeto.push(7);
      break;
      case 'h': alfabeto.push(8);
      break;
      case 'i': alfabeto.push(9);
      break;
      case 'j': alfabeto.push(10);
      break;
      case 'k': alfabeto.push(11);
      break;
      case 'l': alfabeto.push(12);
      break;
      case 'm': alfabeto.push(13);
      break;
      case 'n': alfabeto.push(14);
      break;
      case 'o': alfabeto.push(15);
      break;
      case 'p': alfabeto.push(16);
      break;
      case 'q': alfabeto.push(17);
      break;
      case 'r': alfabeto.push(18);
      break;
      case 's': alfabeto.push(19);
      break;
      case 't': alfabeto.push(20);
      break;
      case 'u': alfabeto.push(21);
      break;
      case 'v': alfabeto.push(22);
      break;
      case 'w': alfabeto.push(23);
      break;
      case 'y': alfabeto.push(24);
      break;
      case 'x': alfabeto.push(25);
      break;
      case 'z': alfabeto.push(26);
      break;
      default: alfabeto.push(0);
      break;
    }
  }
  return alfabeto;
}

console.log('ESERCIZIO 10')
console.log(lettera())