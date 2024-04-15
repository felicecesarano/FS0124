/* AGGIUNTA DATI */

const endpoint = "https://striveschool-api.herokuapp.com/api/product/"
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMWJkZDJkN2IxMTAwMTkwZTc3NGIiLCJpYXQiOjE3MDk5MDY5MTAsImV4cCI6MTcxMTExNjUxMH0.jhAi6Gw2QmKmtqEHo3DT8ej4KvqP8_ngsFO1Kz-xcDw"

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

       await postFetch(newProduct)

        window.location.href = 'index.html'
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
        const conferma = confirm('Sei sicuro di voler resettare il form?')
    
        if (conferma) {
            resetForm();
        }
    })

