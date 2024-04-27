package Progetto.Magazzino;

import java.util.Scanner;
import java.io.Serializable;

public class Libri extends Catalogo implements Serializable{

    public final GenereLibri genere;
    public String autore;

    public Libri (String titolo, int numeroPagine, int ISBN, int pubblicazione, GenereLibri genere, String autore){
        super(titolo,numeroPagine,ISBN,pubblicazione);
        this.genere= genere;
        this.autore= autore;
    }

    public GenereLibri getGenere(){return this.genere;}
    public String getAutore(){return this.autore;}

    public static Libri insertBooks(Scanner sc) {
        System.out.println();
        System.out.println("Write title:");
        String titolo = sc.nextLine();

        System.out.println("Write authors name:");
        String autore = sc.nextLine();

        System.out.println("Write the genre (Drama, Fantasy, Horror, Romance):");
        GenereLibri genereLibri1;
        do {
            try {
                genereLibri1 = GenereLibri.valueOf(sc.nextLine().toUpperCase());
                break;
            } catch (IllegalArgumentException ex) {
                System.err.println("Error: genre not available.");
            }
        } while (true);

        int numeroPagine;
        int pubblicazione;

        System.out.println("Enter the number of pages:");
        numeroPagine = Integer.parseInt(sc.nextLine());

        System.out.println("Enter the publication year:");
        pubblicazione = Integer.parseInt(sc.nextLine());

        System.out.println("Enter the ISBN:");
        int ISBN;
        while (true) {
            if (sc.hasNextInt()) {
                ISBN = sc.nextInt();
                break;
            } else {
                System.err.println("Error: Enter a valid ISBN (must be an integer).");
                sc.nextLine();
            }
        }

        return new Libri(titolo, numeroPagine, ISBN, pubblicazione, genereLibri1, autore);
    }

    @Override
    public String toString() {
        return "\nTipo: Libro" +
                "\nISBN: " + getISBN() +
                "\nTitle: " + getTitolo() +
                "\nPubblicatio Date: " + getPubblicazione() +
                "\nNumber Of Page: " + getNumeroPagine() +
                "\nAuthors " + getAutore() +
                "\nGenre: " + getGenere() +
                "\n";
    }

}