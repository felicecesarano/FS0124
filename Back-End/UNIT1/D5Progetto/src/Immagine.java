public class Immagine extends Multimediale {
    private int luminosita;

    public Immagine(String titolo, int luminosita) {
        super(titolo, 0); // Immagini non hanno durata
        this.luminosita = luminosita;
    }

    @Override
    public void esegui() {
        show();
    }

    public void show() {
        System.out.println(titolo + " " + "*".repeat(luminosita));
    }

    public void aumentaLuminosita() {
        luminosita++;
    }

    public void diminuisciLuminosita() {
        if (luminosita > 0) {
            luminosita--;
        }
    }
}
