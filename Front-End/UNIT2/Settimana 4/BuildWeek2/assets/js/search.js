const mainSearch = document.getElementById('mainSearch')
const search2 = document.getElementById('search2');


search.addEventListener('click', (e) => {
    e.preventDefault();
    mainSearch.style.display = 'inline';
    const mainArtist = document.getElementById('mainArtist');
    const searchBar2 = document.getElementById('searchBar2')
    const showMain = document.getElementById('showMain')
    mainArtist.style.display = 'none';
    showMain.style.display = 'none';
    searchBar2.style.display = 'inline';
})


function createCard4(albumData, index) {
    console.log(albumData)
    // Creazione dell'elemento div con le classi specificate
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('rounded-3', 'cardGener', 'mb-3');
    // Assegna un colore di sfondo dalla lista di colori in base all'indice della card
    cardDiv.style.backgroundColor = colors[index % colors.length];
    cardDiv.onclick = function () {
        console.log(albumData)
        saveCurrentArtist(albumData);
        fillArtistPage();   
       mainSearch.style.display = 'none';       
    };
    


    // Creazione dell'elemento h4 con la classe specificata e il testo "Musica"
    const h4Element = document.createElement('h4');
    h4Element.classList.add('mt-2', 'ms-1', 'text-white', 'circular-regular');
    h4Element.textContent = albumData.data[0].artist.name;

    // Creazione dell'elemento img con la classe specificata, l'attributo src e l'attributo alt
    const imgElement = document.createElement('img');
    imgElement.classList.add('shadow');
    imgElement.setAttribute('src', albumData.data[0].artist.picture);
    imgElement.setAttribute('alt', '');

    // Aggiunta degli elementi figlio al div principale
    cardDiv.appendChild(h4Element);
    cardDiv.appendChild(imgElement);

    // Aggiunta del div principale al genitore specificato
    documentCard4.appendChild(cardDiv);
}

function fillSearchPage() {
    clearMain();
}