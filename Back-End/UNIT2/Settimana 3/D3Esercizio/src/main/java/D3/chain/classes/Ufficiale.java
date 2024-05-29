package D3.chain.classes;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public abstract class Ufficiale {
    private String mansione;
    private double stipendio;
}
