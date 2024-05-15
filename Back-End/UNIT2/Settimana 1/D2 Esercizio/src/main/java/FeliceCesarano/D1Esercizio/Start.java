package FeliceCesarano.D1Esercizio;

import FeliceCesarano.D1Esercizio.entities.Menu;
import FeliceCesarano.D1Esercizio.entities.Ordine;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class Start {

    public static void main(String[] args) {
        SpringApplication.run(Start.class, args);
    }

    @Component
    public static class Runner implements CommandLineRunner {

        private final AnnotationConfigApplicationContext ctx;
        private final Logger logger = LoggerFactory.getLogger(Runner.class);
        private final Environment env;

        public Runner(AnnotationConfigApplicationContext ctx, Environment env) {
            this.ctx = ctx;
            this.env = env;
        }

        @Override
        public void run(String... args) throws Exception {
            Menu menuPizzeria = ctx.getBean(Menu.class);
            menuPizzeria.printMenu();

            Ordine ordine = ctx.getBean(Ordine.class);
            logger.info("Ordine Creato: " + ordine.toString());
        }
    }
}
