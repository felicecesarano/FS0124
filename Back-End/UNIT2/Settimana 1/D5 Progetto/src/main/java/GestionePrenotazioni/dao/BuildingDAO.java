package GestionePrenotazioni.dao;

import GestionePrenotazioni.entities.Building;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuildingDAO extends JpaRepository<Building, Long> {
    boolean existsByNameIgnoreCase(String name);

    boolean existsByAddressIgnoreCase(String name);

}
