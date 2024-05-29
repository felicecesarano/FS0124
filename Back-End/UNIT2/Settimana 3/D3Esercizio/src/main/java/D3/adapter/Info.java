package D3.adapter;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class Info implements DataSource {
    public String nome;
    public String cognome;
    private LocalDate dataDiNascita;

    @Override
    public String getNomeCompleto() {
        return this.nome + " " + this.cognome;
    }

    @Override
    public int getEta() {
        return LocalDate.now().compareTo(this.dataDiNascita);
    }
}
