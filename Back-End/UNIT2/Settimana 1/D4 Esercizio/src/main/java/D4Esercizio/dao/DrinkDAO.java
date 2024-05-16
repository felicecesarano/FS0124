package D4Esercizio.dao;

import D4Esercizio.entities.Drink;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrinkDAO extends JpaRepository<Drink, Long> {
}
