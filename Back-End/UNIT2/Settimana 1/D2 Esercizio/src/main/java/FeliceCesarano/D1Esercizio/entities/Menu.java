package FeliceCesarano.D1Esercizio.entities;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Menu {
    private List<Pizza> pizzaList;
    private List<Condimento> condimentoList;
    private List<Bevanda> bevandaList;

    //    METHODS
    public void printMenu() {
        System.out.println("---MENU PIZZERIA---");
        System.out.println(" ");
        System.out.println("---PIZZE---");
        pizzaList.forEach(pizza ->
                System.out.println(String.format("%s   %d kCal   %.2f€", pizza.getNome(), pizza.getCalorie(), pizza.getPrezzo())));
        System.out.println(" ");
        System.out.println("---CONDIMENTI---");
        condimentoList.forEach(condimento ->
                System.out.println(String.format("%s   %d kCal   %.2f€", condimento.getNome(), condimento.getCalorie(), condimento.getPrezzo())));
        System.out.println(" ");
        System.out.println("---BEVANDE---");
        bevandaList.forEach(bevanda ->
                System.out.println(String.format("%s   %d kCal   %.2f€", bevanda.getNome(), bevanda.getCalorie(), bevanda.getPrezzo())));
    }
}
