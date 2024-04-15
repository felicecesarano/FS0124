const cardBook = document.getElementById('cardBook');
let list = [];

const readData = async () => {
    await fetch('https://striveschool-api.herokuapp.com/books')
        .then(response => response.json())
        .then(data => {
            list = data;
            selectAll();
        })
        .catch(err => {
            console.log('Errore nel recupero dei dati: ', err);
        });
}

function selectAll() {
    for (let i = 0; i < list.length; i++) {
        cardBook.innerHTML +=
            `<div class="col-6 col-md-4 p-1">
        <div class="card h-100" id="book-${i}">
            <img src="${list[i].img}" class="card-img-top" alt="${list[i].title}">
            <div class="card-body">
                <h5 class="card-title">${list[i].title}</h5>
                <p class="bg-dark rounded-5 text-white col-2 text-center">${list[i].category}</p>
                <p class="card-text">${list[i].price}€</p>
                <div class="d-flex justify-content-around">
                <button type="button" class="btn btn-danger" id="compra" value="${i}">Compra Ora</button>
                <button type="button" class="btn border-danger text-danger " id="scarta" value="${i}">Scarta</button>
                </div>
            </div>
        </div>
        </div>`;
    }
}

cardBook.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.id === 'scarta') {
        const indice = parseInt(e.target.value);
        const bookElement = document.getElementById(`book-${indice}`);
        if (bookElement) {
            bookElement.style.display = 'none';
        }
    }
});

readData();
