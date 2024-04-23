import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Random rand = new Random();
        Scanner scanner = new Scanner(System.in);

        int[] array = new int[5];
        for (int i = 0; i < array.length; i++) {
            array[i] = rand.nextInt(10) + 1; // Genera un numero casuale tra 1 e 10
        }

        System.out.print("Array iniziale: ");
        printArray(array);

        int posizione;
        int numero;

        do {
            System.out.print("Inserisci una posizione (da 1 a 5) o 0 per uscire: ");
            try {
                posizione = scanner.nextInt();
                if (posizione == 0) {
                    break; // Se l'utente inserisce 0, esce dal loop
                } else if (posizione < 1 || posizione > 5) {
                    throw new IllegalArgumentException("Posizione non valida. Inserire un numero compreso tra 1 e 5.");
                }

                System.out.print("Inserisci un numero: ");
                numero = scanner.nextInt();

                array[posizione - 1] = numero; // La posizione inserita dall'utente viene decrementata di 1 perché gli array iniziano da 0

                System.out.print("Array aggiornato: ");
                printArray(array);
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            } catch (java.util.InputMismatchException e) {
                System.out.println("Si prega di inserire un numero intero.");
                scanner.next(); // Pulisce il buffer di input
            }
        } while (true);

        System.out.println("Programma terminato.");
        scanner.close();
    }

    public static void printArray(int[] array) {
        System.out.print("[");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i]);
            if (i < array.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }
}
