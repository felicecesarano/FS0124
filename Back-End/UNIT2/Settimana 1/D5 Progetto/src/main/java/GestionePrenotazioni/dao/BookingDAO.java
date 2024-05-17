package GestionePrenotazioni.dao;

import GestionePrenotazioni.entities.Booking;
import GestionePrenotazioni.entities.User;
import GestionePrenotazioni.entities.WorkStation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BookingDAO extends JpaRepository<Booking, Long> {

    boolean existsByWorkStationAndBookingDay(WorkStation workStation, LocalDate bookingDay);

    boolean existsByUserAndBookingDay(User user, LocalDate bookingDay);

    List<Booking> findByWorkStation(WorkStation workStation);

}
