package GestionePrenotazioni.dao;

import GestionePrenotazioni.entities.User;
import GestionePrenotazioni.entities.WorkStation;
import GestionePrenotazioni.enums.WorkStationType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDAO extends JpaRepository<User, Long> {
    boolean existsByEmailIgnoreCase(String email);

    @Query("SELECT w FROM WorkStation w WHERE w.workStationType = :workStationType AND w.building.city = :city")
    List<WorkStation> findWorkstationByTypeAndCity(WorkStationType workStationType, String city);
}
