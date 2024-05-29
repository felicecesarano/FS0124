package D3.chain.filter;

import D3.chain.classes.Ufficiale;

public class FilterMaggiore extends Filter {

    @Override
    public void check(Ufficiale ufficiale) {
        if (ufficiale.getStipendio() >= 3000) passToNext(ufficiale);
        else System.out.println("Sei un capitano");
    }
}
