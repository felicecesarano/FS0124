package GestionePrenotazioni.dao;

import GestionePrenotazioni.entities.User;
import GestionePrenotazioni.entities.WorkStation;
import GestionePrenotazioni.enums.WorkStationType;
import GestionePrenotazioni.exceptions.ItemNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserDAO userDAO;

    public void save(User user) {
        if (!userDAO.existsByEmailIgnoreCase(user.getEmail())) {
            userDAO.save(user);
            System.out.println("User " + user.getId() + " has been saved correctly");
        } else {
            throw new RuntimeException("User's email: " + user.getEmail() + " is already in use!");
        }
    }

    public List<User> findAll() {
        return userDAO.findAll();
    }

    public User findById(long userId) {
        return userDAO.findById(userId).orElseThrow(() -> new ItemNotFoundException(userId));
    }

    public void findByIdAndDelete(long userId) {
        User found = findById(userId);
        userDAO.delete(found);
        System.out.println("User " + userId + " has been deleted correctly");
    }

    public void findByIdAndUpdate(long userId, User userUpdate) {
        User found = findById(userId);
        found.setName(userUpdate.getName());
        found.setSurname(userUpdate.getSurname());
        found.setEmail(userUpdate.getEmail());
        save(found);
        System.out.println("User " + userId + " has been updated correctly");
    }

    public List<WorkStation> filterWorkStationByTypeAndCity(WorkStationType workStationType, String city) {
        return userDAO.findWorkstationByTypeAndCity(workStationType, city);
    }
}
