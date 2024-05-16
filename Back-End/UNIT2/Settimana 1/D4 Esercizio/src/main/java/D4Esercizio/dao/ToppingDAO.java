package D4Esercizio.dao;

import D4Esercizio.entities.Topping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToppingDAO extends JpaRepository<Topping, Long> {
    List<Topping> findByCaloriesLessThan(int calories);

    List<Topping> findByNameIgnoreCase(String name);
}
