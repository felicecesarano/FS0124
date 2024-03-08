const endpoint = "https://striveschool-api.herokuapp.com/api/product/"
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWViMWJkZDJkN2IxMTAwMTkwZTc3NGIiLCJpYXQiOjE3MDk5MDY5MTAsImV4cCI6MTcxMTExNjUxMH0.jhAi6Gw2QmKmtqEHo3DT8ej4KvqP8_ngsFO1Kz-xcDw"
let editProduct = {};

const btnDelete = document.getElementById('delete');
const btnReset = document.getElementById('reset');
const btnSave = document.getElementById('save');
const nameProduct = document.getElementById('nameProduct');
const details = document.getElementById('detailsProduct');
const brandProduct = document.getElementById('brandProduct');
const priceProduct = document.getElementById('priceProduct');
const imgProduct = document.getElementById('imgProduct');

const dataFetch = async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        if (!id) {
            console.log('Parametro id non trovato nell\'URL');
            return;
        }

        const apiUrl = `${endpoint}${id}`;

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log('I dati sono stati ricevuti:', data);

            nameProduct.value = data.name;
            details.value = data.description;
            brandProduct.value = data.brand;
            priceProduct.value = data.price;
            imgProduct.value = data.imageUrl;

        } else {
            console.log('La richiesta non è riuscita. Status:', response.status);
        }
    } catch (error) {
        console.log('Si è verificato un errore', error);
    }
}

dataFetch();

const putFetch = async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        if (!id) {
            console.log('Parametro id non trovato nell\'URL');
            return;
        }

        const apiUrl = `${endpoint}${id}`;

        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editProduct),
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Errore durante l'invio: ${error}`);
    }
};

const deleteFetch = async () => {
    try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        if (!id) {
            console.log('Parametro id non trovato nell\'URL');
            return;
        }

        const apiUrl = `${endpoint}${id}`;

        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log('Prodotto eliminato con successo');
            // Puoi anche reindirizzare l'utente dopo l'eliminazione se necessario
            window.location.href = 'index.html';
        } else {
            console.log('Eliminazione non riuscita. Status:', response.status);
        }
    } catch (error) {
        console.log(`Errore durante l'eliminazione: ${error}`);
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
        editProduct = {
            brand: brandProduct.value,
            description: details.value,
            imageUrl: imgProduct.value,
            name: nameProduct.value,
            price: priceProduct.value,
        };

        await putFetch(editProduct)
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

    btnDelete.addEventListener('click', async (e) => {
        e.preventDefault();
    
        const conferma = confirm('Sei sicuro di voler eliminare il prodotto?');
    
        if (conferma) {
            await deleteFetch();
        }
    });
