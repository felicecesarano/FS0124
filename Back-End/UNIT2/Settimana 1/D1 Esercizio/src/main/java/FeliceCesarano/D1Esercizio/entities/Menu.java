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
        pizzaList.forEach(pizza -> System.out.println(pizza.getNome() + "   " + pizza.getCalorie() + " kCal   " + pizza.getPrezzo() + "€"));
        System.out.println(" ");
        System.out.println("---CONDIMENTI---");
        condimentoList.forEach(condimento -> System.out.println(condimento.getNome() + "   " + condimento.getCalorie() + " kCal   " + condimento.getPrezzo() + "€"));
        System.out.println(" ");
        System.out.println("---BEVANDE---");
        bevandaList.forEach(bevanda -> System.out.println(bevanda.getNome() + "   " + bevanda.getCalorie() + " kCal   " + bevanda.getPrezzo() + "€"));
    }
}
