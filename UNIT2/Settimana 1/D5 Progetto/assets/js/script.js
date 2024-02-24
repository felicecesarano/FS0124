document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const liGreen = document.getElementById('lastLi')
    const position = 400;
   

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > position) {
            nav.classList.add("nav-scroll");
            liGreen.classList.add('liColor');
        } else {
            nav.classList.remove("nav-scroll");
            liGreen.classList.remove('liColor');
        }
    });
    window.addEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
    });
});

function animazione() {
    let lettere = document.querySelectorAll('#casual > g');
    function letteraCasuale() {
        for (let i = 0; i < lettere.length; i++) {
            let numeroRandom = Math.floor(Math.random() * lettere.length);
            setTimeout(() => {
                alternareVisibilita(lettere[numeroRandom]);
            }, i * 400);
        }
        setTimeout(letteraCasuale, 1000);
    }
    letteraCasuale();
}

function alternareVisibilita(lettera) {
    if (lettera.style.fill === 'black') {
        lettera.style.fill = 'transparent';
    } else {
        lettera.style.fill = 'black';
    }
}

animazione();
