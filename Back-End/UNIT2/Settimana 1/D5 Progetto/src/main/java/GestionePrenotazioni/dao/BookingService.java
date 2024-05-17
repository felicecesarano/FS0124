package GestionePrenotazioni.dao;

import GestionePrenotazioni.entities.Booking;
import GestionePrenotazioni.exceptions.ItemNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingDAO bookingDAO;

    public void save(Booking booking) {
        if (!bookingDAO.existsByWorkStationAndBookingDay(booking.getWorkStation(), booking.getBookingDay()) && !bookingDAO.existsByUserAndBookingDay(booking.getUser(), booking.getBookingDay()) && bookingDAO.findByWorkStation(booking.getWorkStation()).size() < booking.getWorkStation().getMaxOccupants()) {
            bookingDAO.save(booking);
            System.out.println("Booking " + booking.getId() + " has been saved correctly");
        } else {
            throw new RuntimeException("Booking's date-workstation/date-user already exists!");
        }

    }

    public List<Booking> findAll() {
        return bookingDAO.findAll();
    }

    public Booking findById(long bookingId) {
        return bookingDAO.findById(bookingId).orElseThrow(() -> new ItemNotFoundException(bookingId));
    }

    public void findByIdAndDelete(long bookingId) {
        Booking found = findById(bookingId);
        bookingDAO.delete(found);
        System.out.println("Booking " + bookingId + " has been deleted correctly");
    }

    public void findByIdAndUpdate(long bookingId, Booking bookingUpdate) {
        Booking found = findById(bookingId);
        found.setUser(bookingUpdate.getUser());
        found.setBookingDay(bookingUpdate.getBookingDay());
        found.setWorkStation(bookingUpdate.getWorkStation());
        save(found);
        System.out.println("Booking " + bookingId + " has been updated correctly");
    }

}
