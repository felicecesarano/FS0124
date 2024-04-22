public class Sim {
    public String numero;
    private double credito;
    private Chiamata[] listaChiamate;

    public Sim(String numero) {
        this.numero = numero;
        this.credito = 0;
        this.listaChiamate = new Chiamata[5];
    }

    public void aggiungiCredito(double nuovoCredito) {
        credito += nuovoCredito;
    }

    public void setListaChiamate(Chiamata[] listaChiamate) {
        this.listaChiamate = listaChiamate;
    }

    public void stampaDati() {
        System.out.println("Sim: " + numero);
        System.out.println("Credito disponibile: " + credito);
        for (int i = 0; i < listaChiamate.length; i++) {
            if (listaChiamate[i] != null) {
                System.out.println("- Chiamata " + (i + 1) + ": " + listaChiamate[i].getNumeroChiamato() +
                        " - Durata minuti: " + listaChiamate[i].getDurata());
            }
        }
    }
}
