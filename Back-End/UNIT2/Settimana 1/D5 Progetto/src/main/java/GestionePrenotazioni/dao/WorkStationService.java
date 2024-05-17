package GestionePrenotazioni.dao;

import GestionePrenotazioni.entities.WorkStation;
import GestionePrenotazioni.exceptions.ItemNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkStationService {

    @Autowired
    private WorkStationDAO workStationDAO;

    public void save(WorkStation workStation) {
        workStationDAO.save(workStation);
        System.out.println("WorkStation " + workStation.getId() + " has been saved correctly");
    }

    public List<WorkStation> findAll() {
        return workStationDAO.findAll();
    }

    public WorkStation findById(long worskStationId) {
        return workStationDAO.findById(worskStationId).orElseThrow(() -> new ItemNotFoundException(worskStationId));
    }

    public void findByIdAndDelete(long worskStationId) {
        WorkStation found = findById(worskStationId);
        workStationDAO.delete(found);
        System.out.println("WorkStation " + worskStationId + " has been deleted correctly");
    }

    public void findByIdAndUpdate(long workStationId, WorkStation workStationUpdate) {
        WorkStation found = findById(workStationId);
        found.setDescription(workStationUpdate.getDescription());
        found.setWorkStationType(workStationUpdate.getWorkStationType());
        found.setMaxOccupants(workStationUpdate.getMaxOccupants());
        found.setBuilding(workStationUpdate.getBuilding());
        save(found);
        System.out.println("Workstation " + workStationId + " has been updated correctly");
    }

}
