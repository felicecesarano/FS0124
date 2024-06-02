package Progetto.services;

import Progetto.entities.User;
import Progetto.exceptions.BadRequestException;
import Progetto.exceptions.NotFoundException;
import Progetto.payloads.NewUserDTO;
import Progetto.repositories.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserDAO userDAO;

    @Autowired
    private PasswordEncoder encoder;

    public Page<User> findAll(int number, int size, String sortBY) {
        Pageable pageable = PageRequest.of(number, size, Sort.by(sortBY));
        return this.userDAO.findAll(pageable);
    }

    public User findById(long id) {
        return this.userDAO.findById(id).orElseThrow(() -> new NotFoundException(id));
    }

    public User findByIdAndUpdate(long id, NewUserDTO payload) {
        User found = this.findById(id);
        if (found.getEmail().equals(payload.email())) {
            if (found.getUsername().equals(payload.username())) {
                found.setName(payload.name());
                found.setSurname(payload.surname());
                found.setPassword(encoder.encode(payload.password()));
            } else if (!this.userDAO.existsByUsername(payload.username())) {
                found.setUsername(payload.username());
                found.setName(payload.name());
                found.setSurname(payload.surname());
                found.setPassword(encoder.encode(payload.password()));
            } else throw new BadRequestException("Username " + payload.username() + " is already taken");
            this.userDAO.save(found);
            return found;
        } else throw new BadRequestException("You are not allowed to change the email");
    }

    public void findByIdAndDelete(long id) {
        User found = this.findById(id);
        this.userDAO.delete(found);
    }

    public User findByEmail(String email) {
        return this.userDAO.findByEmail(email).orElseThrow(() -> new BadRequestException("Email: " + email + " has not been found"));
    }
}
