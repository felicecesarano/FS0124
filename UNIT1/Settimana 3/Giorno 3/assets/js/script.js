const prom = document.getElementById('ricordare');
const btn = document.getElementById('btn');
const lista = document.getElementById('lista');
let singolo;
let prome = [];

btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (prom.value == '') {
        alert('Inserisci qualcosa da ricordare');
        return;
    }
    addProm();
    addText();
    cancelText();
})

const addProm = () => {
    singolo = prom.value;
    prome.push(singolo);
    console.log(prome);
}

function addText() {
    lista.innerHTML = '';
    prome.forEach((element, index) => {
        lista.innerHTML += `<li>${element}&nbsp;<button type="button" onclick="elimina(${index});">Elimina</button></li>`
    });
    cancelText();
}

function cancelText() {
    prom.vale = '';
}


const elimina = (indice) => {
prome.splice(indice, 1);
addText();
}