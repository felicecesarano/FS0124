public class Audio extends Multimediale implements Riproduci {
    private int volume;

    public Audio(String titolo, int durata, int volume) {
        super(titolo, durata);
        this.volume = volume;
    }

    @Override
    public void esegui() {
        play();
    }

    @Override
    public void play() {
        for (int i = 0; i < durata; i++) {
            System.out.println(titolo + " " + "!".repeat(volume));
        }
    }

    public void abbassaVolume() {
        if (volume > 0) {
            volume--;
        }
    }

    public void alzaVolume() {
        volume++;
    }
}