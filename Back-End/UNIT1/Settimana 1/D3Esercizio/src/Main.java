import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("*********** Inserimento dati rettangolo 1 ***********");
        System.out.print("Inserisci altezza rettangolo 1: ");
        double altezza1 = scanner.nextDouble();
        System.out.print("Inserisci larghezza rettangolo 1: ");
        double larghezza1 = scanner.nextDouble();
        Rettangolo r1 = new Rettangolo(altezza1, larghezza1);

        System.out.println("*********** Inserimento dati rettangolo 2 ***********");
        System.out.print("Inserisci altezza rettangolo 2: ");
        double altezza2 = scanner.nextDouble();
        System.out.print("Inserisci larghezza rettangolo 2: ");
        double larghezza2 = scanner.nextDouble();
        Rettangolo r2 = new Rettangolo(altezza2, larghezza2);

        System.out.println("*********** Stampa rettangolo ***********");
        stampaRettangolo(r1);
        System.out.println("*********** Stampa due rettangoli ***********");
        stampaDueRettangoli(r1, r2);

        scanner.close();
    }

    public static void stampaRettangolo(Rettangolo rettangolo) {
        System.out.println("Perimetro rettangolo: " + rettangolo.perimetro());
        System.out.println("Area rettangolo: " + rettangolo.area());
    }

    public static void stampaDueRettangoli(Rettangolo rettangolo1, Rettangolo rettangolo2) {
        System.out.println("Rettangolo 1: ");
        stampaRettangolo(rettangolo1);

        System.out.println("Rettangolo 2: ");
        stampaRettangolo(rettangolo2);

        double sommaAree = rettangolo1.area() + rettangolo2.area();
        double sommaPerimetri = rettangolo1.perimetro() + rettangolo2.perimetro();

        System.out.println("Somma perimetri: ");
        System.out.println(sommaPerimetri);

        System.out.println("Somma aree: ");
        System.out.println(sommaAree);
    }
}
