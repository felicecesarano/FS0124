package Progetto.services;

import Progetto.entities.Booking;
import Progetto.exceptions.BadRequestException;
import Progetto.exceptions.NotFoundException;
import Progetto.payloads.NewBookingDTO;
import Progetto.repositories.BookingDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingDAO bookingDAO;

    @Autowired
    private EventService eventService;

    @Autowired
    private UserService userService;


    public Booking save(long userId, NewBookingDTO payload) {
        if (bookingDAO.existsByEventIdAndUserId(payload.eventId(), userId))
            throw new BadRequestException("You have already booked for this event");
        if (eventService.findById(payload.eventId()).getBookingList().size() >= eventService.findById(payload.eventId()).getMaxPartecipants())
            throw new BadRequestException("Event " + payload.eventId() + " is already full");
        Booking newBooking = new Booking(this.userService.findById(userId), this.eventService.findById(payload.eventId()));
        return this.bookingDAO.save(newBooking);
    }


    public List<Booking> findAllOneUser(long userId) {
        return this.bookingDAO.findByUserId(userId);
    }


    public Booking findById(long id, long userId) {
        return this.bookingDAO.findByIdAndUserId(id, userId).orElseThrow(() -> new NotFoundException(id));
    }

    public void findByIdAndDelete(long id, long userId) {
        Booking found = this.findById(id, userId);
        this.bookingDAO.delete(found);
    }

}
