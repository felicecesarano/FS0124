import java.util.Scanner;

public class Lettore {
    public void avvia() {
        Scanner scanner = new Scanner(System.in);

        Multimediale[] elementi = new Multimediale[5];

        for (int i = 0; i < 5; i++) {
            System.out.println("Inserisci tipo (1=Audio, 2=Video, 3=Immagine): ");
            int tipo = scanner.nextInt();
            scanner.nextLine();

            System.out.println("Inserisci titolo: ");
            String titolo = scanner.nextLine();

            switch (tipo) {
                case 1:
                    elementi[i] = leggiAudio(scanner, titolo);
                    break;
                case 2:
                    elementi[i] = leggiVideo(scanner, titolo);
                    break;
                case 3:
                    elementi[i] = leggiImmagine(scanner, titolo);
                    break;
                default:
                    System.out.println("Tipo non valido, riprova.");
                    i--;
                    break;
            }
        }

        eseguiElementi(scanner, elementi);

        scanner.close();
    }

    private Audio leggiAudio(Scanner scanner, String titolo) {
        System.out.println("Inserisci durata: ");
        int durataAudio = scanner.nextInt();
        System.out.println("Inserisci volume: ");
        int volume = scanner.nextInt();
        return new Audio(titolo, durataAudio, volume);
    }

    private Video leggiVideo(Scanner scanner, String titolo) {
        System.out.println("Inserisci durata: ");
        int durataVideo = scanner.nextInt();
        System.out.println("Inserisci volume: ");
        int volumeVideo = scanner.nextInt();
        System.out.println("Inserisci luminosita: ");
        int luminosita = scanner.nextInt();
        return new Video(titolo, durataVideo, volumeVideo, luminosita);
    }

    private Immagine leggiImmagine(Scanner scanner, String titolo) {
        System.out.println("Inserisci luminosita: ");
        int luminositaImmagine = scanner.nextInt();
        return new Immagine(titolo, luminositaImmagine);
    }

    private void eseguiElementi(Scanner scanner, Multimediale[] elementi) {
        int scelta;
        do {
            System.out.println("Quale elemento eseguire (1-5)? (0 per terminare)");
            scelta = scanner.nextInt();

            if (scelta >= 1 && scelta <= 5) {
                elementi[scelta - 1].esegui();
            } else if (scelta != 0) {
                System.out.println("Scelta non valida, riprova.");
            }
        } while (scelta != 0);
    }
}
