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
    let product;

    for (let i = 0; i < data.length; i++) {
      product = data[i];
      const newCard = card(product);
      cardProduct.innerHTML += newCard;
    }
  } catch (error) {
    console.log('Si è verificato un errore', error);
  }
}

function card(product) {
  return `
  <div class="card mb-2 ms-2" style="width: 18rem;">
      <img src="${product.imageUrl}" class="card-img-top" alt="Immagine Prodotto">
      <div class="card-body d-flex flex-column justify-content-between">
       <div class="mb-3">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text lh-sm">${product.description}</p>
        </div>
          <div class="d-flex justify-content-between">
            <a href="edit.html?id=${product._id}" class="btn btn-warning" id="edit">Modifica</a>
            <a href="javascript:void(0)" class="btn btn-info" data-bs-toggle="modal"
            data-bs-target="#exampleModal" onclick="openModal('${product._id}')">Scopri di più</a>
          </div>
      </div>
  </div>`;
}

window.addEventListener('load', dataFetch)


function openModal(product) {
  return `
  <div class="modal-header">
  <img src="${product.imageUrl}" class="card-img-top" alt="Immagine Prodotto">
  </div>
  <div class="modal-body">
  <h1 class="modal-title fs-5 mb-3 mt-1" id="exampleModalLabel">${product.name}</h1>
<span class="bg-dark text-warning rounded-2 px-2 ">${product.price}€</span>
<p class="card-text mt-3 lh-sm">${product.description}</p>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>`
}

