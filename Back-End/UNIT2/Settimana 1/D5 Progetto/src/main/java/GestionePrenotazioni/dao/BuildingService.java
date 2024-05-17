package GestionePrenotazioni.dao;

import GestionePrenotazioni.entities.Building;
import GestionePrenotazioni.exceptions.ItemNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuildingService {

    @Autowired
    private BuildingDAO buildingDAO;

    public void save(Building building) {
        if (!buildingDAO.existsByNameIgnoreCase(building.getName()) && !buildingDAO.existsByAddressIgnoreCase(building.getAddress())) {
            buildingDAO.save(building);
            System.out.println("Building " + building.getId() + " has been saved correctly");
        } else {
            throw new RuntimeException("Building's name: " + building.getName() + " or building's address " + building.getAddress() + " is/are already in use!");
        }
    }

    public List<Building> findAll() {
        return buildingDAO.findAll();
    }

    public Building findById(long buildingId) {
        return buildingDAO.findById(buildingId).orElseThrow(() -> new ItemNotFoundException(buildingId));
    }

    public void findByIdAndDelete(long buildingId) {
        Building found = findById(buildingId);
        buildingDAO.delete(found);
        System.out.println("Building " + buildingId + " has been deleted correctly");
    }

    public void findByIdAndUpdate(long buildingId, Building buildingUpdate) {
        Building found = findById(buildingId);
        found.setName(buildingUpdate.getName());
        found.setAddress(buildingUpdate.getAddress());
        found.setCity(buildingUpdate.getCity());
        save(found);
        System.out.println("Building " + buildingId + " has been updated correctly");
    }
}
