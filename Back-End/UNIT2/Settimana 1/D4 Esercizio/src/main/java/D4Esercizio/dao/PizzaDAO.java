package D4Esercizio.dao;

import D4Esercizio.entities.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaDAO extends JpaRepository<Pizza, Long> {
}
