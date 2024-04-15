/* GET DEI PRODOTTI E GENERAZIONE DI CARD */

const endpoint = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMWJkZDJkN2IxMTAwMTkwZTc3NGIiLCJpYXQiOjE3MDk5MDY5MTAsImV4cCI6MTcxMTExNjUxMH0.jhAi6Gw2QmKmtqEHo3DT8ej4KvqP8_ngsFO1Kz-xcDw";

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('I dati sono stati ricevuti:', data);
    return data;
  } catch (error) {
    console.log('Si è verificato un errore', error);
    return null;
  }
};

const createCard = (product) => `
  <div class="card mb-2 ms-1 shadow opacity-75 scale" style="width: 19rem;">
    <img src="${product.imageUrl}" class="card-img-top" alt="Immagine Prodotto">
    <div class="card-body d-flex flex-column justify-content-between">
      <div class="mb-3">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text lh-sm">${product.description}</p>
      </div>
      <div class="d-flex justify-content-between">
        <a href="edit.html?id=${product._id}" class="btn btn-warning" id="edit">Modifica</a>
        <a href="#" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal"
          onclick="modalFetch('${product._id}')">Scopri di più</a>
      </div>
    </div>
  </div>`;

const openModal = (data) => {
  const myModal = document.getElementById('myModal');
  if (myModal) {
    myModal.innerHTML = `
      <div class="modal-header">
        <img src="${data.imageUrl}" class="card-img-top" alt="Immagine Prodotto">
      </div>
      <div class="modal-body">
        <h1 class="modal-title fs-5 mb-3 mt-1" id="exampleModalLabel">${data.name}</h1>
        <span class="bg-dark text-warning rounded-2 px-2 ">${data.price}€</span>
        <p class="card-text mt-3 lh-sm">${data.description}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>`;
  }
};

const modalFetch = async (productId) => {
  const data = await fetchData(`${endpoint}${productId}`);
  if (data) {
    openModal(data);
  }
};

const card = async () => {
  const loading = document.getElementById('loading');
  const cardProduct = document.getElementById('cardProduct');

  const data = await fetchData(endpoint);
  if (data) {
    loading.style.display = 'none';
    data.forEach((product) => {
      cardProduct.innerHTML += createCard(product);
    });
  }
};

window.addEventListener('load', card);

/* FUNZIONAMENTO MODAL PER AGGIUNGERE UN PRODOTTO */

const btnReset = document.getElementById('reset');
const btnSave = document.getElementById('save');
const nameProduct = document.getElementById('nameProduct');
const details = document.getElementById('detailsProduct');
const brandProduct = document.getElementById('brandProduct');
const priceProduct = document.getElementById('priceProduct');
const imgProduct = document.getElementById('imgProduct');

let newProduct = {};

const postFetch = async () => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Errore durante l'invio: ${error}`);
  }
};

btnSave.addEventListener('click', async (e) => {
  e.preventDefault();

  try {
    if (
      brandProduct.value.trim() === "" ||
      details.value.trim() === "" ||
      imgProduct.value.trim() === "" ||
      nameProduct.value.trim() === "" ||
      priceProduct.value.trim() === ""
    ) {
      alert("Completa tutti i campi prima di inviare il prodotto.");
      return;
    }
    newProduct = {
      brand: brandProduct.value,
      description: details.value,
      imageUrl: imgProduct.value,
      name: nameProduct.value,
      price: priceProduct.value,
    };

    await postFetch(newProduct);

    window.location.href = 'index.html';
  } catch (error) {
    console.log(`Errore durante l'invio: ${error}`);
  }
});

const resetForm = () => {
  brandProduct.value = "";
  details.value = "";
  imgProduct.value = "";
  nameProduct.value = "";
  priceProduct.value = "";
};

btnReset.addEventListener('click', (e) => {
  e.preventDefault();
  const conferma = confirm('Sei sicuro di voler resettare il form?');
  if (conferma) {
    resetForm();
  }
});
