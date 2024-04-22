import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Esempio di utilizzo del metodo stringaPariDispari
        System.out.print("Inserisci una stringa: ");
        String inputString = scanner.nextLine();
        boolean isEvenLength = stringaPariDispari(inputString);
        System.out.println("La stringa ha un numero pari di caratteri? " + isEvenLength);

        // Esempio di utilizzo del metodo annoBisestile
        System.out.print("Inserisci un anno: ");
        int year = scanner.nextInt();
        boolean isLeapYear = annoBisestile(year);
        System.out.println("L'anno inserito è bisestile? " + isLeapYear);
    }

    public static boolean stringaPariDispari(String str) {
        return str.length() % 2 == 0;
    }

    public static boolean annoBisestile(int year) {
        return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
    }
}
