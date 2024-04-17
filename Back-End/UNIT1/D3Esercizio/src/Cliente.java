import java.time.LocalDate;

public class Cliente {
    private final String codiceCliente;
    private final String nomeCognome;
    private final String email;
    private final LocalDate dataIscrizione;

    // Costruttore
    public Cliente(String codiceCliente, String nomeCognome, String email, String mail, LocalDate dataIscrizione) {
        this.codiceCliente = codiceCliente;
        this.nomeCognome = nomeCognome;
        this.email = email;
        this.dataIscrizione = dataIscrizione;
    }

    // Metodi getter
    public String getCodiceCliente() {
        return codiceCliente;
    }

    public String getNomeCognome() {
        return nomeCognome;
    }

    public String getEmail() {
        return email;
    }

    public LocalDate getDataIscrizione() {
        return dataIscrizione;
    }
}
