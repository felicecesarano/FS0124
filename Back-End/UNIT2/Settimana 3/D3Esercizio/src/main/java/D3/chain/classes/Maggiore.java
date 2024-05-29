package D3.chain.classes;

public class Maggiore extends Ufficiale {
    private Colonnello responsabile;

    public Maggiore(String mansione, Colonnello responsabile) {
        super(mansione, 3000);
        this.responsabile = responsabile;
    }
}
