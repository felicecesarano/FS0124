package Progetto.repositories;

import Progetto.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookingDAO extends JpaRepository<Booking, Long> {

    boolean existsByEventIdAndUserId(long eventId, long userId);

    Optional<Booking> findByIdAndUserId(long id, long userId);

    List<Booking> findByUserId(long userId);

}
