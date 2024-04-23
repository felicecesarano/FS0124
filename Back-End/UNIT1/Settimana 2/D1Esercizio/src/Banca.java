import java.util.Scanner;

public class Banca {
    public static void main(String args[]) {
        ContoCorrente conto1 = new ContoCorrente("Grossi Mario", 20000.0);

        System.out.println("Saldo conto: " + conto1.restituisciSaldo());

        try {
            conto1.preleva(1750.5);
            System.out.println("Saldo conto: " + conto1.restituisciSaldo());
        } catch (BancaException e) {
            System.err.println("Errore durante il prelievo: " + e.getMessage());
        }

        ContoOnline conto2 = new ContoOnline("Rossi Luigi", 50350.0, 1500);

        conto2.stampaSaldo();

        Scanner scanner = new Scanner(System.in);
        System.out.print("Inserisci l'importo del prelievo per conto2: ");
        double importoPrelievo = scanner.nextDouble();

        try {
            conto2.effettuaPrelievo(importoPrelievo);
            conto2.stampaSaldo();
        } catch (BancaException e) {
            System.err.println("Errore durante il prelievo: " + e.getMessage());
        }

        scanner.close();
    }
}
