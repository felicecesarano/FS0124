import java.util.Random;

public class Main2 {

    public static void main(String[] args) {
        // Creazione di un'istanza di Sim con un numero di telefono casuale
        String numeroSim = generaNumeroCasuale();
        Sim sim1 = new Sim(numeroSim);
        sim1.aggiungiCredito(20);

        // Creazione di un array di Chiamate con numeri di telefono e durate casuali
        Chiamata[] listaChiamate = new Chiamata[5];
        for (int i = 0; i < listaChiamate.length; i++) {
            String numeroChiamato = generaNumeroCasuale();
            int durataChiamata = generaDurataCasuale();
            listaChiamate[i] = new Chiamata(numeroChiamato, durataChiamata);
        }

        // Impostazione della lista delle chiamate sulla SIM e stampa dei dati
        sim1.setListaChiamate(listaChiamate);
        sim1.stampaDati();
    }

    // Metodo per generare un numero di telefono casuale
    private static String generaNumeroCasuale() {
        Random rand = new Random();
        StringBuilder numero = new StringBuilder("+39 333");
        for (int i = 0; i < 7; i++) {
            numero.append(rand.nextInt(7));
        }
        return numero.toString();
    }

    // Metodo per generare una durata casuale per le chiamate (tra 1 e 30 minuti)
    private static int generaDurataCasuale() {
        Random rand = new Random();
        return rand.nextInt(30) + 1;
    }
}
