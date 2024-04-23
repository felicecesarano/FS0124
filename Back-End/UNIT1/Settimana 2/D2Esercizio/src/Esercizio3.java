import java.util.*;

public class Esercizio3 {
    private Map<String, String> rubrica;

    public Esercizio3() {
        rubrica = new HashMap<>();
    }

    public void inserisciContatto(String nome, String numero) {
        rubrica.put(nome, numero);
    }

    public void cancellaContatto(String nome) {
        rubrica.remove(nome);
    }

    public String cercaPersonaDaNumero(String numero) {
        return rubrica.entrySet().stream()
                .filter(entry -> entry.getValue().equals(numero))
                .map(Map.Entry::getKey)
                .findFirst()
                .orElse(null);
    }

    public String cercaNumeroDaPersona(String nome) {
        return rubrica.get(nome);
    }

    public void stampaContatti() {
        System.out.println("Rubrica Telefonica:");
        rubrica.forEach((nome, numero) -> System.out.println("Nome: " + nome + ", Telefono: " + numero));
    }

    public static void main(String[] args) {
        Esercizio3 rubricaTelefonica = new Esercizio3();

        rubricaTelefonica.inserisciContatto("Felice", "726273911");
        rubricaTelefonica.inserisciContatto("Enzo", "2718394019");
        rubricaTelefonica.inserisciContatto("Marco", "3617289390");

        rubricaTelefonica.stampaContatti();

        String nome = rubricaTelefonica.cercaPersonaDaNumero("726273911");
        System.out.println("\nRicerca persona da numero: " + nome);

        String numero = rubricaTelefonica.cercaNumeroDaPersona("Enzo");
        System.out.println("\nRicerca numero da nome: " + numero);

        rubricaTelefonica.cancellaContatto("Marco");

        rubricaTelefonica.stampaContatti();
    }
}
