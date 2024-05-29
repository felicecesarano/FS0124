package D3.chain.classes;

public class Colonnello extends Ufficiale {

    private Generale responsabile;

    public Colonnello(String mansione, Generale responsabile) {
        super(mansione, 4000);
        this.responsabile = responsabile;
    }
}
