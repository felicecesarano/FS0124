const tab = document.getElementById('tab');
const btn = document.getElementById('btn');
const uscita = document.getElementById('uscita');
let ultimoNumero; 
const usciti = [];

function griglia() {
    for (let i = 0; i < 90; i++) {
        const div = document.createElement('div');
        div.classList.add('griglia');
        div.textContent = i + 1;
        tab.appendChild(div);
    }
}
griglia();

btn.addEventListener('click', function (e) {
    e.preventDefault();
   generaN(); 
   evidenzia();
});

const generaN = () => {
    let numero = Math.floor(Math.random() * 90) + 1;
    let trovato = usciti.indexOf(numero)
    if (trovato != -1){
        if (usciti.length < 90){
             generaN();
        } else{
            uscita.innerText = 'Numeri terminati';
        }
    }else {
        ultimoNumero = numero;
    uscita.innerText = `E' uscito il numero ${numero}`;
    usciti.push(ultimoNumero);
    }   
};

const evidenzia = () => {
    const numeri = document.querySelectorAll('.griglia');
    for (let i = 0; i < numeri.length; i++) {
        if (parseInt(numeri[i].textContent) === ultimoNumero) {
            numeri[i].classList.add('estratto');
        }
    }
}
