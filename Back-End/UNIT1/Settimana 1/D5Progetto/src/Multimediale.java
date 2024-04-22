public abstract class Multimediale {
    protected String titolo;
    protected int durata;

    public Multimediale(String titolo, int durata) {
        this.titolo = titolo;
        this.durata = durata;
    }

    public abstract void esegui();
}
