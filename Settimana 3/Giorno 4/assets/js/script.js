const tab = document.getElementById('tab');
const btn = document.getElementById('btn');
const lista = document.getElementById('lista');
let ultimoNumero; 

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
    const estrai = generaN(); 
    evidenzia(estrai);
    giaEstratti();
});

const generaN = () => {
    let numero = Math.floor(Math.random() * 90) + 1;
    const li = document.createElement('li');
    li.textContent = numero;
    lista.appendChild(li);
    ultimoNumero = numero; 
    return numero; 
};

const evidenzia = (estrai) => {
    const estratti = document.querySelectorAll('.griglia');
    estratti.forEach((element) => {
        if (parseInt(element.textContent) === estrai) { 
            element.classList.add('estratto');
        }
    });
};
