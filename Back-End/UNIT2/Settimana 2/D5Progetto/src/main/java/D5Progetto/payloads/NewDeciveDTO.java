package D5Progetto.payloads;

import jakarta.validation.constraints.NotEmpty;

public record NewDeciveDTO(
        @NotEmpty(message = "type is mandatory")
        String type
) {
}
