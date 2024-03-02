
function controllo(event) {
    event.preventDefault();

    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const utente = 'cesarano.fc@gmail.com';
    const utentePassword = 'FS0124';

    if (email === utente && password === utentePassword) {
        window.location.href = '../../index.html';
    } else {
        alert('Credenziali non valide. Riprova.');
    }
}