package Progetto.services;

import Progetto.entities.Event;
import Progetto.exceptions.BadRequestException;
import Progetto.exceptions.NotFoundException;
import Progetto.payloads.NewEventDTO;
import Progetto.payloads.UpdateEventDTO;
import Progetto.repositories.EventDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    @Autowired
    private EventDAO eventDAO;

    public Page<Event> findAll(int number, int size, String sortBY) {
        Pageable pageable = PageRequest.of(number, size, Sort.by(sortBY));
        return this.eventDAO.findAll(pageable);
    }

    public Event findById(long id) {
        return this.eventDAO.findById(id).orElseThrow(() -> new NotFoundException(id));
    }

    public void findByIdAndDelete(long id) {
        Event found = this.findById(id);
        this.eventDAO.delete(found);
    }


    public Event save(NewEventDTO payload) {
        if (!eventDAO.existsByPlaceAndDate(payload.place(), payload.date())) {
            Event newEvent = new Event(payload.title(), payload.description(), payload.place(), payload.date(), payload.maxPartecipants());
            return this.eventDAO.save(newEvent);
        } else throw new BadRequestException("Place and Date are already booked");
    }

    public Event findByIdAndUpdate(long id, UpdateEventDTO payload) {
        Event found = this.findById(id);
        if (!eventDAO.existsByPlaceAndDate(payload.place(), payload.date())) {
            found.setDate(payload.date());
            found.setPlace(payload.place());
            return this.eventDAO.save(found);
        } else throw new BadRequestException("Place and Date are already booked");
    }
}
