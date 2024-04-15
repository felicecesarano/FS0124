import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Inserisci due numeri interi per la moltiplicazione:");
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        int risultatoMoltiplicazione = moltiplica(num1, num2);
        System.out.println("Risultato della moltiplicazione: " + risultatoMoltiplicazione);

        System.out.println("Inserisci una stringa per la concatenazione:");
        String str = scanner.next();
        System.out.println("Inserisci un numero intero:");
        int num = scanner.nextInt();
        String risultatoConcatenazione = concatena(str, num);
        System.out.println("Risultato della concatenazione: " + risultatoConcatenazione);

        System.out.println("Inserisci un array di cinque stringhe:");
        String[] arrayOriginale = new String[5];
        for (int i = 0; i < 5; i++) {
            arrayOriginale[i] = scanner.next();
        }
        System.out.println("Inserisci una stringa da inserire nell'array:");
        String nuovaStringa = scanner.next();
        String[] nuovoArray = inserisciInArray(arrayOriginale, nuovaStringa);
        System.out.println("Nuovo array dopo l'inserimento: ");
        for (String elemento : nuovoArray) {
            System.out.print(elemento + " ");
        }

        System.out.println("\nInserisci tre stringhe da concatenare:");
        String stringa1 = scanner.next();
        String stringa2 = scanner.next();
        String stringa3 = scanner.next();
        String concatenazioneOrdinata = concatenaStringhe(stringa1, stringa2, stringa3);
        System.out.println("Concatenazione delle stringhe in ordine di inserimento: " + concatenazioneOrdinata);

        String concatenazioneInversa = concatenaStringhe(stringa3, stringa2, stringa1);
        System.out.println("Concatenazione delle stringhe in ordine inverso di inserimento: " + concatenazioneInversa);

        // Chiedi all'utente di inserire i lati del rettangolo e calcola il perimetro
        System.out.println("Inserisci la lunghezza del primo lato del rettangolo:");
        double latoRettangolo1 = scanner.nextDouble();
        System.out.println("Inserisci la lunghezza del secondo lato del rettangolo:");
        double latoRettangolo2 = scanner.nextDouble();
        double perimetroRettangolo = perimetroRettangolo(latoRettangolo1, latoRettangolo2);
        System.out.println("Il perimetro del rettangolo è: " + perimetroRettangolo);

        // Chiedi all'utente di inserire un numero e verifica se è pari o dispari
        System.out.println("Inserisci un numero intero per verificare se è pari o dispari:");
        int numeroPariDispari = scanner.nextInt();
        int risultatoPariDispari = pariDispari(numeroPariDispari);
        System.out.println("Il numero " + numeroPariDispari + " è " + (risultatoPariDispari == 0 ? "pari" : "dispari"));

        // Chiedi all'utente di inserire i lati del triangolo e calcola il perimetro
        System.out.println("Inserisci la lunghezza del primo lato del triangolo:");
        double latoTriangolo1 = scanner.nextDouble();
        System.out.println("Inserisci la lunghezza del secondo lato del triangolo:");
        double latoTriangolo2 = scanner.nextDouble();
        System.out.println("Inserisci la lunghezza del terzo lato del triangolo:");
        double latoTriangolo3 = scanner.nextDouble();
        double perimetroTriangolo = perimetroTriangolo(latoTriangolo1, latoTriangolo2, latoTriangolo3);
        System.out.println("L'area del triangolo è: " + perimetroTriangolo);

        scanner.close();
    }

    public static int moltiplica(int a, int b) {
        return a * b;
    }

    public static String concatena(String str, int a) {
        return str + " " + a;
    }

    public static String[] inserisciInArray(String[] array, String str) {
        String[] newArray = new String[6];
        for (int i = 0; i < array.length + 1; i++) {
            if (i < 2) {
                newArray[i] = array[i];
            } else if (i == 2) {
                newArray[i] = str;
            } else {
                newArray[i] = array[i - 1];
            }
        }
        return newArray;
    }

    public static String concatenaStringhe(String str1, String str2, String str3) {
        return str1 + str2 + str3;
    }

    public static double perimetroRettangolo(double lato1, double lato2) {
        return 2 * (lato1 + lato2);
    }

    public static int pariDispari(int numero) {
        return numero % 2 == 0 ? 0 : 1;
    }

    public static double perimetroTriangolo(double lato1, double lato2, double lato3) {
        double semiperimetro = (lato1 + lato2 + lato3) / 2;
        double area = Math.sqrt(semiperimetro * (semiperimetro - lato1) * (semiperimetro - lato2) * (semiperimetro - lato3));
        return area;
    }
}