package FeliceCesarano.D1Esercizio.entities;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Tavolo {
    private int numero;
    private int maxCoperti;
    private boolean occupato;
}