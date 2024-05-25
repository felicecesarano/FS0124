package D5Progetto.payloads;

import jakarta.validation.constraints.NotEmpty;

public record DeviceDTO(
        @NotEmpty(message = "status is mandatory")
        String status
) {
}
