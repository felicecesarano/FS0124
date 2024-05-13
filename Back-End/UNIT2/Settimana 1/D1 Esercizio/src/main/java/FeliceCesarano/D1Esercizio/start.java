package FeliceCesarano.D1Esercizio;


import FeliceCesarano.D1Esercizio.entities.Menu;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class start {

    public static void main(String[] args) {
        SpringApplication.run(start.class, args);

        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(start.class);

        Menu menuPizzeria = ctx.getBean(Menu.class);

        menuPizzeria.printMenu();
    }

}
