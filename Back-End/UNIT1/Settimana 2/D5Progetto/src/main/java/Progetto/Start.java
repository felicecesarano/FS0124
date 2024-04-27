package Progetto;

import Progetto.Magazzino.Catalogo;
import Progetto.Magazzino.Gestione;
import Progetto.Magazzino.Libri;
import Progetto.Magazzino.Riviste;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

public class Start {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<Catalogo> catalogoList = new ArrayList<>();

        Gestione gestione = new Gestione(catalogoList);

        // Caricamento automatico del catalogo da disco
        catalogoList = gestione.loadcatalogo("C:\\Users\\Felice\\Desktop\\FS0124\\Back-End\\UNIT1\\Settimana 2\\D5Progetto\\src\\main\\java\\Progetto\\Magazzino\\archivio.txt");
        System.out.println("Catalogo caricato correttamente da disco.");

        System.out.println("Benvenuti nel nostro store di libri!");
        System.out.println("-----------------------------------------");

        int scelta;
        do {
            System.out.println("Scegliere la tua opzione:");
            System.out.println("1. Inserisci un nuovo libro o rivista");
            System.out.println("2. Rimozione di un libro o rivista");
            System.out.println("3. Ricerca per ISBN");
            System.out.println("4. Ricerca per anno pubblicazione");
            System.out.println("5. Ricerca per autore");
            System.out.println("6. Visualizza tutti gli elementi presenti nel catalogo");
            System.out.println("7. Esci");
            System.out.println("-----------------------------------------");

            scelta = scanner.nextInt();
            scanner.nextLine();

            switch (scelta) {
                case 1:
                    // Aggiungi un nuovo libro o una nuova rivista
                    System.out.println("Scegliere cosa aggiungere:");
                    System.out.println("1. Libro");
                    System.out.println("2. Rivista");
                    int tipoInserimento = scanner.nextInt();
                    scanner.nextLine();
                    if (tipoInserimento == 1) {
                        Libri libro = Libri.insertBooks(scanner);
                        gestione.sameISBN(scanner, libro);
                        gestione.savecatalogo("C:\\Users\\Felice\\Desktop\\FS0124\\Back-End\\UNIT1\\Settimana 2\\D5Progetto\\src\\main\\java\\Progetto\\Magazzino\\archivio.txt");
                    } else if (tipoInserimento == 2) {
                        Riviste rivista = Riviste.insertMagazines(scanner);
                        gestione.sameISBN(scanner, rivista);
                        gestione.savecatalogo("C:\\Users\\Felice\\Desktop\\FS0124\\Back-End\\UNIT1\\Settimana 2\\D5Progetto\\src\\main\\java\\Progetto\\Magazzino\\archivio.txt");
                    } else {
                        System.out.println("Scelta non valida");
                    }
                    break;

                case 2:
                    // Rimozione di un libro dato un codice ISBN
                    System.out.println("Inserire l'ISBN del libro da rimuovere:");
                    int isbnToRemove = scanner.nextInt();
                    scanner.nextLine();
                    gestione.removeItemByISBN(isbnToRemove);
                    System.out.println("Libro rimosso correttamente");
                    gestione.savecatalogo("C:\\Users\\Felice\\Desktop\\FS0124\\Back-End\\UNIT1\\Settimana 2\\D5Progetto\\src\\main\\java\\Progetto\\Magazzino\\archivio.txt");
                    break;
                case 3:
                    // Ricerca per ISBN
                    System.out.println("Inserire l'ISBN da cercare:");
                    int isbnToSearch = scanner.nextInt();
                    scanner.nextLine();
                    Optional<Catalogo> foundByISBN = gestione.findByISBN(isbnToSearch);
                    if (foundByISBN.isPresent()) {
                        System.out.println(foundByISBN.get());
                    } else {
                        System.out.println("Nessun libro trovato con questo ISBN");
                    }
                    break;
                case 4:
                    // Ricerca per anno di pubblicazione
                    System.out.println("Inserire l'anno di pubblicazione da cercare:");
                    int yearToSearch = scanner.nextInt();
                    scanner.nextLine();
                    List<Catalogo> foundByPublicationYear = gestione.findByPublicationYear(yearToSearch);
                    if (!foundByPublicationYear.isEmpty()) {
                        for (Catalogo item : foundByPublicationYear) {
                            System.out.println(item);
                        }
                    } else {
                        System.out.println("Nessun libro trovato per questo anno di pubblicazione");
                    }
                    break;
                case 5:
                    // Ricerca per autore
                    System.out.println("Inserire il nome dell'autore da cercare:");
                    String authorToSearch = scanner.nextLine();
                    List<Catalogo> foundByAuthor = gestione.findByAuthor(authorToSearch);
                    if (!foundByAuthor.isEmpty()) {
                        for (Catalogo item : foundByAuthor) {
                            System.out.println(item);
                        }
                    } else {
                        System.out.println("Nessun libro trovato per questo autore");
                    }
                    break;
                case 6:
                    // Visualizza tutti i libri e le riviste presenti nel catalogo
                    List<Catalogo> catalogo = gestione.getCatalogo();
                    System.out.println("Lista dei libri e delle riviste presenti nel catalogo:");
                    for (Catalogo item : catalogo) {
                        if (item instanceof Libri || item instanceof Riviste) {
                            System.out.println(item);
                        }
                    }
                    break;

                case 7:
                    System.out.println("Arrivederci!");
                    break;
                default:
                    System.out.println("Scelta non valida");
                    break;
            }
        } while (scelta != 7);

        // Salvataggio automatico del catalogo su disco alla fine dell'esecuzione
        gestione.savecatalogo("C:\\Users\\Felice\\Desktop\\FS0124\\Back-End\\UNIT1\\Settimana 2\\D5Progetto\\src\\main\\java\\Progetto\\Magazzino\\archivio.txt");
        System.out.println("Catalogo salvato correttamente su disco.");
    }
}
