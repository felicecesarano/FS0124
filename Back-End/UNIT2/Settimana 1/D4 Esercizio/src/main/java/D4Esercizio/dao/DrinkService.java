package D4Esercizio.dao;

import D4Esercizio.entities.Drink;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DrinkService {
    @Autowired
    private DrinkDAO drinkDAO;

    public void save(Drink drink) {
        drinkDAO.save(drink);
        System.out.println("Drink " + drink.getId() + " has been added correctly");
    }
}
