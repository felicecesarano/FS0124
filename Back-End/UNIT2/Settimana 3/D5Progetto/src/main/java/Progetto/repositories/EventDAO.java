package Progetto.repositories;

import Progetto.entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface EventDAO extends JpaRepository<Event, Long> {
    boolean existsByPlaceAndDate(String place, LocalDate date);
}
