import java.util.Scanner;

public class For {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Inserisci un numero intero: ");
        int numero = scanner.nextInt();

        System.out.println("Conto alla rovescia da " + numero + " a 0:");

        // Utilizziamo un ciclo for per stampare il conto alla rovescia
        for (int i = numero; i >= 0; i--) {
            System.out.println(i);
        }
    }
}
