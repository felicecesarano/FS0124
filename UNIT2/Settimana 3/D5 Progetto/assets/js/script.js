const endpoint = "https://striveschool-api.herokuapp.com/api/product/"
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMWJkZDJkN2IxMTAwMTkwZTc3NGIiLCJpYXQiOjE3MDk5MDY5MTAsImV4cCI6MTcxMTExNjUxMH0.jhAi6Gw2QmKmtqEHo3DT8ej4KvqP8_ngsFO1Kz-xcDw"

const dataFetch = async () => {
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        console.log('I dati sono stati ricevuti:', data)

        const cardProduct = document.getElementById('cardProduct')

        for (let i = 0; i < data.length; i++) {
            const product = data[i];
            const newCard = card(product);
            cardProduct.innerHTML += newCard;
        }
    } catch (error) {
        console.log('Si è verificato un errore', error);
    }
}

function card(product) {
    return `
    <div class="card mb-2" style="width: 18rem;">
            <img src="${product.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
                <div>
                  <a href="edit.html?id=${product._id}" class="btn mb-2 btn-warning" id="edit">Modifica</a>
                </div>
                <div>
                  <a href="javascript:void(0)" class="btn btn-info">Scopri di più</a>
                </div>
            </div>
          </div>`
}

window.addEventListener('load', dataFetch)