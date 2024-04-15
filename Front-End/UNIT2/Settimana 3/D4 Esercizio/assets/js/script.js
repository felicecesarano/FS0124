const btnLoad = document.querySelector('.btn-primary');
const btnLoad2 = document.querySelector('.btn-secondary');
const searchImg = document.getElementById('searchImg');
const inputImg = document.getElementById('inputImg');
const urlApi = 'https://api.pexels.com/v1/search?query=';

const readApi = async (search) => {
    try {
        const response = await fetch(urlApi + search, {
            headers: {
                Authorization: 'TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5',
            },
        });

        if (!response.ok) {
            throw new Error('Problema nella fetch');
        }

        const data = await response.json();
        console.log(data);



        let img = document.querySelectorAll('img');
        for (let i = 0; i < img.length; i++) {
            img[i].src = data.photos[i].src.original;
        }

    } catch (err) {
        console.log(err);
    }
};

btnLoad.addEventListener('click', (e) => {
    e.preventDefault();
    readApi('mountains');
});

btnLoad2.addEventListener('click', (e) => {
    e.preventDefault();
    readApi('sunset');
});

searchImg.addEventListener('click', (e) => {
    e.preventDefault();
    readApi(inputImg.value);
});

