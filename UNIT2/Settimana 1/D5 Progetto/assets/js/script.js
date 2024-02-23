document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const liGreen = document.getElementById('lastLi')
    const scrollPositionToChangeColor = 400;

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > scrollPositionToChangeColor) {
            nav.classList.add("nav-scroll");
            liGreen.classList.add('liColor');
            console.log(liGreen)
        } else {
            nav.classList.remove("nav-scroll");
            liGreen.classList.remove('liColor');
        }
    });
    window.addEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
    });
});
