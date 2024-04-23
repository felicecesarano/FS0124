import java.util.Scanner;

public class Esercizio2 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Inserisci il numero di km percorsi: ");
            double kmPercorsi = scanner.nextDouble();

            System.out.print("Inserisci i litri di carburante consumati: ");
            double litriCarburante = scanner.nextDouble();

            if (litriCarburante == 0) {
                throw new IllegalArgumentException("Il numero di litri non può essere zero.");
            }

            double kmPerLitro = kmPercorsi / litriCarburante;
            System.out.println("Il consumo dell'auto è di " + kmPerLitro + " km/l.");
        } catch (java.util.InputMismatchException e) {
            System.out.println("Si prega di inserire un numero valido.");
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        } catch (ArithmeticException e) {
            System.out.println("Errore di divisione per zero.");
        }

        scanner.close();
    }
}
