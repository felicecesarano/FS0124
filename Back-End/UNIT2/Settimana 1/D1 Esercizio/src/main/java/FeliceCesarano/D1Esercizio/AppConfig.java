package FeliceCesarano.D1Esercizio;

import FeliceCesarano.D1Esercizio.entities.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class AppConfig {

    @Bean
    public Bevanda limonataBean() {
        return new Bevanda("Limonata", 128, 1.29);
    }

    @Bean
    public Bevanda acquaBean() {
        return new Bevanda("Acqua", 0, 0.79);
    }

    @Bean
    public Bevanda vinoBean() {
        return new Bevanda("Vino", 607, 7.49);
    }

    @Bean
    public Condimento mozzarellaBean() {
        return new Condimento("Mozzarella", 92, 0.69);
    }

    @Bean
    public Condimento pomodoroBean() {
        return new Condimento("Pomodoro", 126, 1.19);
    }

    @Bean
    public Condimento prosciuttoBean() {
        return new Condimento("Prosciutto", 35, 0.99);
    }

    @Bean
    public Condimento oliveBean() {
        return new Condimento("Olive", 86, 0.99);
    }

    @Bean
    public Condimento salamePiccanteBean() {
        return new Condimento("Salame piccante", 125, 0.79);
    }

    @Bean
    public Pizza margheritaBean() {
        List<Condimento> condimentoList = new ArrayList<>();
        condimentoList.add(pomodoroBean());
        condimentoList.add(mozzarellaBean());
        return new Pizza("Margherita", condimentoList, 1000 + pomodoroBean().getCalorie() + mozzarellaBean().getCalorie(), 5.00 + pomodoroBean().getPrezzo() + mozzarellaBean().getPrezzo());
    }

    @Bean
    public Pizza margheritaXLBean() {
        List<Condimento> condimentoList = new ArrayList<>();
        condimentoList.add(pomodoroBean());
        condimentoList.add(mozzarellaBean());
        return new Pizza("Margherita XL", condimentoList, 1500 + pomodoroBean().getCalorie() + mozzarellaBean().getCalorie(), 8.00 + pomodoroBean().getPrezzo() + mozzarellaBean().getPrezzo());
    }

    @Bean
    public Pizza pizzaProsciuttoBean() {
        List<Condimento> condimentoList = new ArrayList<>();
        condimentoList.add(pomodoroBean());
        condimentoList.add(mozzarellaBean());
        condimentoList.add(prosciuttoBean());
        return new Pizza("Pizza al prosciutto", condimentoList, 1000 + pomodoroBean().getCalorie() + mozzarellaBean().getCalorie() + prosciuttoBean().getCalorie(), 5.00 + pomodoroBean().getPrezzo() + mozzarellaBean().getPrezzo() + prosciuttoBean().getPrezzo());
    }

    @Bean
    public Pizza pizzaProsciuttoXLBean() {
        List<Condimento> condimentoList = new ArrayList<>();
        condimentoList.add(pomodoroBean());
        condimentoList.add(mozzarellaBean());
        condimentoList.add(prosciuttoBean());
        return new Pizza("Pizza al prosciutto XL", condimentoList, 1500 + pomodoroBean().getCalorie() + mozzarellaBean().getCalorie() + prosciuttoBean().getCalorie(), 8.00 + pomodoroBean().getPrezzo() + mozzarellaBean().getPrezzo() + prosciuttoBean().getPrezzo());
    }

    @Bean
    public Pizza pizzaDiavolaBean() {
        List<Condimento> condimentoList = new ArrayList<>();
        condimentoList.add(pomodoroBean());
        condimentoList.add(mozzarellaBean());
        condimentoList.add(oliveBean());
        condimentoList.add(salamePiccanteBean());
        return new Pizza("Pizza alla diavola", condimentoList, 1000 + pomodoroBean().getCalorie() + mozzarellaBean().getCalorie() + salamePiccanteBean().getCalorie() + oliveBean().getCalorie(), 5.00 + pomodoroBean().getPrezzo() + mozzarellaBean().getPrezzo() + oliveBean().getPrezzo() + salamePiccanteBean().getPrezzo());
    }

    @Bean
    public Pizza pizzaDiavolaXLBean() {
        List<Condimento> condimentoList = new ArrayList<>();
        condimentoList.add(pomodoroBean());
        condimentoList.add(mozzarellaBean());
        condimentoList.add(oliveBean());
        condimentoList.add(salamePiccanteBean());
        return new Pizza("Pizza alla diavola XL", condimentoList, 1500 + pomodoroBean().getCalorie() + mozzarellaBean().getCalorie() + salamePiccanteBean().getCalorie() + oliveBean().getCalorie(), 8.00 + pomodoroBean().getPrezzo() + mozzarellaBean().getPrezzo() + oliveBean().getPrezzo() + salamePiccanteBean().getPrezzo());
    }

    @Bean
    public Menu menuBean() {
        List<Pizza> pizzaList = new ArrayList<>();
        pizzaList.add(margheritaBean());
        pizzaList.add(pizzaDiavolaBean());
        pizzaList.add(pizzaProsciuttoBean());
        pizzaList.add(margheritaXLBean());
        pizzaList.add(pizzaDiavolaXLBean());
        pizzaList.add(pizzaProsciuttoXLBean());
        List<Bevanda> bevandaList = new ArrayList<>();
        bevandaList.add(acquaBean());
        bevandaList.add(limonataBean());
        bevandaList.add(vinoBean());
        List<Condimento> condimentoList = new ArrayList<>();
        condimentoList.add(pomodoroBean());
        condimentoList.add(mozzarellaBean());
        condimentoList.add(salamePiccanteBean());
        condimentoList.add(oliveBean());
        condimentoList.add(prosciuttoBean());
        return new Menu(pizzaList, condimentoList, bevandaList);
    }
}
