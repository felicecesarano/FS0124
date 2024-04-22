import java.util.Scanner;

public class While {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String inputString;

        while (true) {
            System.out.println("Inserisci una stringa (\":q\" per terminare il programma): ");
            inputString = scanner.nextLine();

            // Suddivide la stringa in caratteri separati da virgola e stampa il risultato
            for (int i = 0; i < inputString.length(); i++) {
                System.out.print(inputString.charAt(i));
                if (i != inputString.length() - 1) {
                    System.out.print(", ");
                }
            }

            System.out.println(); // Vai a capo

            // Controlla se l'utente ha inserito ":q" per uscire
            if (inputString.equals(":q")) {
                break;
            }
        }

        System.out.println("Programma terminato.");
    }
}
