package Progetto.entities;

import Progetto.enums.Periodicity;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;

@Entity
@Table
public class Magazine extends Archive {

    //    ATTRIBUTES
    @Enumerated(EnumType.STRING)
    private Periodicity periodicity;

    //    CONSTRUCTORS
    public Magazine(int isbn, String title, int pagesNumber, int publicationDate, Loan loan, Periodicity periodicity) {
        super(isbn, title, pagesNumber, publicationDate, loan);
        this.periodicity = periodicity;
    }

    public Magazine() {

    }

    //    GETTERS AND SETTERS
    public Periodicity getPeriodicity() {
        return periodicity;
    }

    public void setPeriodicity(Periodicity periodicity) {
        this.periodicity = periodicity;
    }

    //    TO STRING
    @Override
    public String toString() {
        return "Magazine{" +
                "periodicity=" + periodicity +
                ", id=" + id +
                ", isbn=" + isbn +
                ", title='" + title + '\'' +
                ", pagesNumber=" + pagesNumber +
                ", publicationDate=" + publicationDate +
                '}';
    }
}
