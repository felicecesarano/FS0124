package D3.chain.classes;

public class Tenente extends Ufficiale {
    private Capitano responsabile;

    public Tenente(String mansione, Capitano responsabile) {
        super(mansione, 1000);
        this.responsabile = responsabile;
    }
}
