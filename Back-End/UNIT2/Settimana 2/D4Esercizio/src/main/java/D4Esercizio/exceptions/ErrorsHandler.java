package D4Esercizio.exceptions;

import D4Esercizio.payload.ErrorDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

@RestControllerAdvice
public class ErrorsHandler {

    @ExceptionHandler(NotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    private ErrorDTO NotFoundExceptionHandler(NotFoundException ex) {
        return new ErrorDTO(ex.getMessage(), LocalDateTime.now());
    }

    @ExceptionHandler(BadRequestException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    private ErrorDTO BadRequestExcpetionHandler(BadRequestException ex) {
        if (ex.getErrorList().isEmpty()) {
            return new ErrorDTO(ex.getMessage(), LocalDateTime.now());
        } else {
            String message = ex.getErrorList().stream().map(objectError -> objectError.getDefaultMessage()).collect(Collectors.joining(". "));
            return new ErrorDTO(message, LocalDateTime.now());
        }
    }
}
