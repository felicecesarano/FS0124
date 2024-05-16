package D4Esercizio;

import D4Esercizio.dao.DrinkService;
import D4Esercizio.dao.PizzaService;
import D4Esercizio.dao.ToppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DbRunner implements CommandLineRunner {

    @Autowired
    private DrinkService drinkService;

    @Autowired
    private ToppingService toppingService;

    @Autowired
    private PizzaService pizzaService;

    @Override
    public void run(String... args) throws Exception {

////        UPLOAD DRINKS
//        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(U5W1D4Application.class);
//        List<Drink> drinkList = (List<Drink>) ctx.getBean("drinks");
//        drinkList.forEach(drink -> drinkService.save(drink));
//
////        UPLOAD TOPPINGS
//        List<Topping> toppingList = (List<Topping>) ctx.getBean("toppings");
//        toppingList.forEach(topping -> toppingService.save(topping));
//
////        UPLOAD PIZZA
//        List<Pizza> pizzaList = (List<Pizza>) ctx.getBean("pizzas");
//        pizzaList.forEach(pizza -> pizzaService.save(pizza));

        System.out.println(toppingService.findByCaloriesLessThan(50));

        System.out.println(toppingService.filterByName("salami"));

    }
}
