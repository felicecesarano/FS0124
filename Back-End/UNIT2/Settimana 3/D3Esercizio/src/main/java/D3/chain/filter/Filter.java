package D3.chain.filter;

import D3.chain.classes.Ufficiale;
import lombok.Data;

@Data
public abstract class Filter {
    private Filter nextFilter;

    public abstract void check(Ufficiale ufficiale);

    public void passToNext(Ufficiale ufficiale) {
        if (nextFilter != null) this.nextFilter.check(ufficiale);
    }
}
