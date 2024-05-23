package D4Esercizio.exceptions;

public class NotFoundException extends RuntimeException {

    public NotFoundException(long id) {
        super("Record with id: " + id + " has not been found!");
    }

}
