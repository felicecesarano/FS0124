package D4Esercizio.dao;

import D4Esercizio.entities.Topping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToppingService {

    @Autowired
    private ToppingDAO toppingDAO;

    public void save(Topping topping) {
        toppingDAO.save(topping);
        System.out.println("Topping " + topping.getId() + " has been saved correctly");
    }

    public Topping findById(long toppingId) {
        return toppingDAO.findById(toppingId).orElseThrow(() -> new RuntimeException("NOT FOUND"));
    }

    public List<Topping> findByCaloriesLessThan(int calories) {
        return toppingDAO.findByCaloriesLessThan(calories);
    }

    public List<Topping> filterByName(String name) {
        return toppingDAO.findByNameIgnoreCase(name);
    }
}
