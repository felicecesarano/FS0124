import java.util.*;

public class Esercizio2 {

    public static void main(String[] args) {

        List<Integer> listaRandom = generaListaCasuale(10);
        System.out.println("Lista casuale: " + listaRandom);

        List<Integer> nuovaLista = duplicaInOrdineInverso(listaRandom);
        System.out.println("Nuova lista: " + nuovaLista);

        System.out.println("Stampa posizioni pari:");
        stampaPosizioniPari(nuovaLista, true);

        System.out.println("\nStampa posizioni dispari:");
        stampaPosizioniPari(nuovaLista, false);
    }


    public static List<Integer> generaListaCasuale(int N) {
        List<Integer> listaCasuale = new ArrayList<>();
        Random rand = new Random();
        for (int i = 0; i < N; i++) {
            listaCasuale.add(rand.nextInt(101));
        }
        return listaCasuale;
    }


    public static List<Integer> duplicaInOrdineInverso(List<Integer> lista) {
        List<Integer> nuovaLista = new ArrayList<>(lista);
        Collections.reverse(nuovaLista);
        nuovaLista.addAll(lista);
        return nuovaLista;
    }

    public static void stampaPosizioniPari(List<Integer> lista, boolean pari) {
        for (int i = pari ? 0 : 1; i < lista.size(); i += 2) {
            System.out.println(lista.get(i));
        }
    }
}
