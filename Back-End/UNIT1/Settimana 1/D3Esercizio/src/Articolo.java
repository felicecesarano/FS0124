public class Articolo {
    private String codiceArticolo;
    private String descrizioneArticolo;
    private double prezzo;
    private int numeroPezziDisponibili;

    public Articolo(String codiceArticolo, String descrizioneArticolo, double prezzo, int numeroPezziDisponibili) {
        this.codiceArticolo = codiceArticolo;
        this.descrizioneArticolo = descrizioneArticolo;
        this.prezzo = prezzo;
        this.numeroPezziDisponibili = numeroPezziDisponibili;
    }

    public String getCodiceArticolo() {
        return codiceArticolo;
    }

    public String getDescrizioneArticolo() {
        return descrizioneArticolo;
    }

    public double getPrezzo() {
        return prezzo;
    }

    public int getNumeroPezziDisponibili() {
        return numeroPezziDisponibili;
    }

    public void aggiungiPezzi(int quantita) {
        numeroPezziDisponibili += quantita;
    }

    public void vendiPezzi(int quantita) {
        if (quantita > numeroPezziDisponibili) {
            System.out.println("Errore: Quantità richiesta superiore ai pezzi disponibili.");
        } else {
            numeroPezziDisponibili -= quantita;
        }
    }

    @Override
    public String toString() {
        return "Codice: " + codiceArticolo + ", Descrizione: " + descrizioneArticolo + ", Prezzo: " + prezzo + "€";
    }
}
