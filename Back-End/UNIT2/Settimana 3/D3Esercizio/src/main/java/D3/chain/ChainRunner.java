package D3.chain;

import D3.chain.classes.*;
import D3.chain.filter.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ChainRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        System.out.println("###  CHAIN  ###");

        Ufficiale generale = new Generale("Bobby");
        Ufficiale colonnello = new Colonnello("Bobby", (Generale) generale);
        Ufficiale maggiore = new Maggiore("Bobby", (Colonnello) colonnello);
        Ufficiale capitano = new Capitano("Bobby", (Maggiore) maggiore);
        Ufficiale tenente = new Tenente("Bobby", (Capitano) capitano);

        FiltroTenente filtroTenente = new FiltroTenente();
        FiltroCapitano filtroCapitano = new FiltroCapitano();
        FilterMaggiore filterMaggiore = new FilterMaggiore();
        FiltroColonnello filtroColonnello = new FiltroColonnello();
        FilterGenerale filterGenerale = new FilterGenerale();

        filtroTenente.setNextFilter(filtroCapitano);
        filtroCapitano.setNextFilter(filterMaggiore);
        filterMaggiore.setNextFilter(filtroColonnello);
        filtroColonnello.setNextFilter(filterGenerale);

        filtroTenente.check(tenente);

        System.out.println("###  END CHAIN  ###");

    }
}
