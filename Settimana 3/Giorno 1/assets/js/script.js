/* ESERCIZIO 1
      Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
   */

const changeTitle = function () {
    document.getElementsByTagName('h1')[0].innerText = 'Esercizi giorno 1 settimana 3'
};
changeTitle();
/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    document.getElementsByTagName('h1')[0].setAttribute('class', 'myHeading');
}
addClassToTitle()
/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
    let paragrafi = document.querySelectorAll('div p')
    for (let i = 0; i < paragrafi.length; i++) {
        paragrafi[i].innerText = 'Cambio testo'
    }
}
changePcontent()
/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
    const url = document.querySelectorAll('a:not(footer a');
    for (let i = 0; i < url.length; i++) {
        url[i].href = 'https://www.google.com/'
    }
};
changeUrls()
/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
    const seconda = document.getElementById('secondList');
    const nuovoLi = document.createElement('li');
    nuovoLi.textContent = 'Elemento aggiunto';
    seconda.appendChild(nuovoLi);
}
addToTheSecond();

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
    let primoDiv = document.querySelector('div')
    let p = document.createElement('p');
    p.innerText = 'Paragrafo aggiunto al primo div';
    primoDiv.appendChild(p);
}
addParagraph();
/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    document.getElementById('firstList').style.display = 'none';
}
hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
    let list = document.querySelectorAll('ul');
    for (let i = 0; i < list.length; i++) {
        list[i].style.backgroundColor = 'green'
    }
}
paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {
    document.querySelector('h1').addEventListener('click', function () {
        let h1 = this.textContent;
        if (h1.length > 0) {
            let dopoClick = h1.slice(0, -1);
            this.textContent = dopoClick;
        }
    })
}

makeItClickable()
/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

const revealFooterLink = function () { 
    const footer = document.querySelector('footer');
    footer.style.cursor = 'pointer';
    footer.addEventListener('click', function () { 
      const footerLink = document.querySelector('footer a');
    const footerurl = footerLink.getAttribute('href');
    alert(footerurl);  
    })
    
}
revealFooterLink();
/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {}


/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () { }

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () { }