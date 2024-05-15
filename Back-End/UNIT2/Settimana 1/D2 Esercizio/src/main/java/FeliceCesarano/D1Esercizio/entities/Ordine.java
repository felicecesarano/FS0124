package FeliceCesarano.D1Esercizio.entities;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Ordine {
    private int numeroOrdine;
    private Tavolo tavolo;
    private List<Pizza> pizze;
    private List<Bevanda> bevande;
    private List<Condimento> condimenti;
    private String stato; // in corso, pronto, servito
    private int numeroCoperti;
    private LocalDateTime oraAcquisizione;
    private double importoTotale;

    public void calcolaImportoTotale(double costoCoperto) {
        double totale = pizze.stream().mapToDouble(Pizza::getPrezzo).sum()
                + bevande.stream().mapToDouble(Bevanda::getPrezzo).sum()
                + condimenti.stream().mapToDouble(Condimento::getPrezzo).sum()
                + (numeroCoperti * costoCoperto);
        this.importoTotale = totale;
    }
}