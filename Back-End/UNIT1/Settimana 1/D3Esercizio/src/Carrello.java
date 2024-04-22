public class Carrello {
    private Cliente clienteAssociato;
    private java.util.List<Articolo> elencoArticoli;
    private double totaleCostoArticoli;

    // Costruttore
    public Carrello(Cliente clienteAssociato) {
        this.clienteAssociato = clienteAssociato;
        this.elencoArticoli = new java.util.ArrayList<>();
        this.totaleCostoArticoli = 0;
    }

    // Metodo per aggiungere un articolo al carrello
    public void aggiungiArticolo(Articolo articolo) {
        elencoArticoli.add(articolo);
        totaleCostoArticoli += articolo.getPrezzo();
    }

    // Metodo per rimuovere un articolo dal carrello
    public void rimuoviArticolo(Articolo articolo) {
        elencoArticoli.remove(articolo);
        totaleCostoArticoli -= articolo.getPrezzo();
    }

    // Metodi getter
    public Cliente getClienteAssociato() {
        return clienteAssociato;
    }

    public java.util.List<Articolo> getElencoArticoli() {
        return elencoArticoli;
    }

    public double getTotaleCostoArticoli() {
        return totaleCostoArticoli;
    }
}
