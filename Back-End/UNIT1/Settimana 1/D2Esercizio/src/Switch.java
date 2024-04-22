import java.util.Scanner;

public class Switch {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.print("Inserisci un intero: ");
        int numero = scanner.nextInt();

        switch(numero) {
            case 0:
                System.out.println("Zero");
                break;
            case 1:
                System.out.println("Uno");
                break;
            case 2:
                System.out.println("Due");
                break;
            case 3:
                System.out.println("Tre");
                break;
            default:
                System.out.println("Valore non compreso tra 0 e 3");
                break;
        }
    }
}
