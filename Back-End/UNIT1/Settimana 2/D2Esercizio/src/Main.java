import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        System.out.print("Inserisci il numero di elementi: ");
        int N = scanner.nextInt();
        scanner.nextLine();


        Set<String> parole = new HashSet<>();


        for (int i = 0; i < N; i++) {
            System.out.print("Inserisci la parola " + (i + 1) + ": ");
            parole.add(scanner.nextLine());
        }


        System.out.println("\nParole duplicate:");
        parole.stream()
                .filter(parola -> !parole.add(parola))
                .distinct()
                .forEach(System.out::println);


        System.out.println("\nNumero di parole distinte: " + parole.size());


        System.out.println("\nElenco delle parole distinte:");
        parole.forEach(System.out::println);
    }
}
