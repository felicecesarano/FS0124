package GestionePrenotazioni.dao;

import GestionePrenotazioni.entities.WorkStation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkStationDAO extends JpaRepository<WorkStation, Long> {
}
