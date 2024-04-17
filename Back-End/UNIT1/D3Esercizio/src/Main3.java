import java.time.LocalDate;


public class Main3 {

    public static void main(String[] args) {
        // Creazione di un cliente
        Cliente mario = new Cliente("5678", "Mario", "Rossi", "mario@rossi.com", LocalDate.now());

        // Creazione di un articolo (computer)
        Articolo computer = new Articolo("MacBook Pro", "Potente", 2000, 10); // Aggiunto il numero di pezzi disponibili

        // Creazione di un altro articolo (stampante)
        Articolo stampante = new Articolo("Epson", "Multifunzione", 300, 20); // Aggiunto il numero di pezzi disponibili

        // Creazione di un carrello di Mario e aggiunta degli articoli
        Carrello carrelloDiMario = new Carrello(mario);
        carrelloDiMario.aggiungiArticolo(computer);
        carrelloDiMario.aggiungiArticolo(stampante);

        // Stampa di tutti gli articoli nel carrello di Mario
        for (Articolo articolo : carrelloDiMario.getElencoArticoli()) {
            System.out.println(articolo);
        }

        // Stampa del totale costo degli articoli nel carrello di Mario
        System.out.println(carrelloDiMario.getTotaleCostoArticoli());
    }
}
