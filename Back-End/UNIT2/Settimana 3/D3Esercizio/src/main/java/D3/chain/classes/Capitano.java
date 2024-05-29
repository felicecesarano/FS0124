package D3.chain.classes;

public class Capitano extends Ufficiale {
    private Maggiore responsabile;

    public Capitano(String mansione, Maggiore responsabile) {
        super(mansione, 2000);
        this.responsabile = responsabile;
    }
}
