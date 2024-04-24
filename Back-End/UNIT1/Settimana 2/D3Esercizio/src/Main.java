import Esercizio.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

        Product mangiaPregaAma = new Product(965081126, "Mangia Prega Ama", "Books", 99.5);
        Product lombraDelVento = new Product(1234907632, "L'ombra del vento", "Books", 102.4);
        Product comeUnaNotteABali = new Product(569441123, "Come una notte a Bali", "Books", 13.80);
        Product unIndovinoMiDisse = new Product(393377900, "Un indovino mi disse", "Books", 25.70);
        Product unAltroGiroDiGiostra = new Product(324679045, "Un altro giro di giostra", "Books", 165.9);

        Product pacifier = new Product(802472114, "Pacifier", "Baby", 17.80);
        Product pushchair = new Product(411168842, "Pushchair", "Baby", 150.25);
        Product bodySpray = new Product(300756789, "Body Spray", "Baby", 29.90);

        Product backpack = new Product(741256, "Backpack", "Boys", 79.90);
        Product shoes = new Product(616584, "Shoes", "Boys", 200.6);
        Product cap = new Product(259114, "Cap", "Boys", 39.90);


        // List of all products
        List<Product> listOfAllProducts = new ArrayList<>(Arrays.asList(mangiaPregaAma, lombraDelVento, comeUnaNotteABali, unAltroGiroDiGiostra, unIndovinoMiDisse, pacifier, pushchair, bodySpray, backpack, shoes, cap));
        System.out.println(listOfAllProducts);

//------------------------------------------------CUSTOMERS-----------------------------------------------------------

        Customer benedetta = new Customer("Benedetta", 2);
        Customer gianfranco = new Customer("Gianfranco", 1);
        Customer tiziana = new Customer("Tiziana", 3);
        Customer marco = new Customer("Marco", 2);
        Customer noemi = new Customer("Noemi", 4);

        // list of all customers

        List<Customer> customersList = new ArrayList<>(Arrays.asList(benedetta, gianfranco, tiziana, marco, noemi));
        System.out.println(customersList);

        //--------------------------------------ORDERS----------------------------------------
        Order benedettaOrder = new Order(benedetta);
        Order gianfrancoOrder = new Order(gianfranco);
        Order tizianaOrder = new Order(tiziana);
        Order marcoOrder = new Order(marco);
        Order noemiOrder = new Order(noemi);


        Product book1 = listOfAllProducts.get(0);
        Product book2 = listOfAllProducts.get(1);
        Product book3 = listOfAllProducts.get(2);
        Product book4 = listOfAllProducts.get(3);
        Product book5 = listOfAllProducts.get(4);

        Product babyProduct1 = listOfAllProducts.get(5);
        Product babyProduct2 = listOfAllProducts.get(6);
        Product babyProduct3 = listOfAllProducts.get(7);

        Product boysProduct1 = listOfAllProducts.get(8);
        Product boysProduct2 = listOfAllProducts.get(9);
        Product boysProduct3 = listOfAllProducts.get(10);

        benedettaOrder.addProduct(book5);
        benedettaOrder.addProduct(book5);
        benedettaOrder.addProduct(pacifier);

        gianfrancoOrder.addProduct(book3);
        gianfrancoOrder.addProduct(book4);

        tizianaOrder.addProduct(babyProduct1);
        tizianaOrder.addProduct(boysProduct1);
        tizianaOrder.addProduct(book5);

        marcoOrder.addProduct(babyProduct1);
        marcoOrder.addProduct(book4);

        noemiOrder.addProduct(book3);

        // Create list of orders
        List<Order> ordersList = new ArrayList<>(Arrays.asList(benedettaOrder, gianfrancoOrder, tizianaOrder, marcoOrder, noemiOrder));
        System.out.println(ordersList);

        //---------------------------------------------------------EXERCISE 1------------------------------------------
        System.out.println("-------------------LISTA PRODOTTI CATEGORIA BOOK CON PREZZO MAGGIORE DI 100€----------------------------");
        List<Product> booksList = listOfAllProducts.stream().filter(product -> product.getCategory().equals("Books") && product.getPrice() > 100).toList();
        System.out.println(booksList);

        //---------------------------------------------------EXERCISE 2-------------------------------------------

        System.out.println("---------------------------------LISTA PRODOTTI CATEGORIA BABY--------------------------------");

        List<Order> ordersBabyCategoryList = ordersList.stream().filter(order -> order.getProducts().stream().anyMatch(product -> product.getCategory().equals("Baby"))).toList();
        System.out.println(ordersBabyCategoryList);

        //--------------------------------------------------EXERCISE 3------------------------------------------------------
        System.out.println("---------------------------LISTA PRODOTTI BOYS CON 10% DI SCONTO------------------------------------ ");

        List<Product> boysProductsList = listOfAllProducts.stream().filter(product -> product.getCategory().equals("Boys")).map(product -> {
            product.setPrice(product.getPrice() * 0.9);
            return product;
        }).toList();
        System.out.println(boysProductsList);

        // -------------------------------------------------ESERCIZIO 4--------------------------------------------------------
        System.out.println("----------------------LISTA PRODOTTI DI CLIENTI TIER 2 ORDINATI TRA 01/02 E 01/04 2021--------------------------");

        List<Product> tier2Products = ordersList.stream().filter(order -> order.getCustomer().getTier() == 2 &&
                        order.getOrderDate().isAfter(LocalDate.of(2021, 1, 31)) &&
                        order.getOrderDate().isBefore(LocalDate.of(2021, 4, 2)))
                .flatMap(order -> order.getProducts().stream())
                .collect(Collectors.toList());

        System.out.println("Prodotti ordinati da clienti di livello 2 tra l'01-Feb-2021 e l'01-Apr-2021:");
        tier2Products.forEach(System.out::println);

    }
}
