package GestionePrenotazioni.entities;

import GestionePrenotazioni.dao.BuildingService;
import GestionePrenotazioni.enums.WorkStationType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.ArrayList;
import java.util.List;

@Configuration
@PropertySource("application.properties")
public class AppConfig {

    @Autowired
    private BuildingService buildingService;

    //    CREAZIONE USER(DIPENDENTI)
    @Bean(name = "Felice")
    public User user1Bean() {
        return new User("Felice", "Cesarano", "felice@cesarano.com");
    }

    @Bean
    public User user2Bean() {
        return new User("Luigi", "Borni", "luigi@borni.com");
    }

    @Bean
    public User user3Bean() {
        return new User("Mario", "Bianchi", "mario@bianchi.com");
    }

    @Bean
    public User user4Bean() {
        return new User("Enzo", "Verdi", "enzo@verdi.com");
    }

    @Bean
    public User user5Bean() {
        return new User("Miky", "Santi", "miky@santi.com");
    }

    @Bean(name = "users")
    public List<User> userListBean() {
        List<User> userList = new ArrayList<>();
        userList.add(user1Bean());
        userList.add(user2Bean());
        userList.add(user3Bean());
        userList.add(user4Bean());
        userList.add(user5Bean());
        return userList;
    }


    //    CREAZIONE BUILDING
    @Bean
    public Building building1Bean() {
        return new Building("Palazzo1", "Via Roma", "Milano");
    }

    @Bean
    public Building building2Bean() {
        return new Building("Palazzo2", "Parco Vittoria", "Roma");
    }

    @Bean
    public Building building3Bean() {
        return new Building("Palazzo3", "Via Dante Alighieri", "Torino");
    }

    @Bean
    public Building building4Bean() {
        return new Building("Palazzo4", "Via Caracciolo", "Napoli");
    }

    @Bean
    public Building building5Bean() {
        return new Building("Palazzo5", "Via Toledo", "Napoli");
    }

    @Bean(name = "buildings")
    public List<Building> buildingListBean() {
        List<Building> buildingList = new ArrayList<>();
        buildingList.add(building1Bean());
        buildingList.add(building2Bean());
        buildingList.add(building3Bean());
        buildingList.add(building4Bean());
        buildingList.add(building5Bean());
        return buildingList;
    }

    //        CREAZIONE WORKSTATIONS
    @Bean
    public WorkStation workStation1Bean() {
        return new WorkStation("description", WorkStationType.OPENSPACE, 10, buildingService.findById(1));
    }

    @Bean
    public WorkStation workStation2Bean() {
        return new WorkStation("description", WorkStationType.SALA_RIUNIONI, 20, buildingService.findById(1));
    }

    @Bean
    public WorkStation workStation3Bean() {
        return new WorkStation("description", WorkStationType.PRIVATO, 5, buildingService.findById(2));
    }

    @Bean
    public WorkStation workStation4Bean() {
        return new WorkStation("description", WorkStationType.SALA_RIUNIONI, 10, buildingService.findById(3));
    }

    @Bean
    public WorkStation workStation5Bean() {
        return new WorkStation("description", WorkStationType.OPENSPACE, 40, buildingService.findById(2));
    }

    @Bean
    public WorkStation workStation6Bean() {
        return new WorkStation("description", WorkStationType.PRIVATO, 5, buildingService.findById(5));
    }

    @Bean
    public WorkStation workStation7Bean() {
        return new WorkStation("description", WorkStationType.OPENSPACE, 25, buildingService.findById(4));
    }

    @Bean
    public WorkStation workStation8Bean() {
        return new WorkStation("description", WorkStationType.SALA_RIUNIONI, 17, buildingService.findById(1));
    }

    @Bean
    public WorkStation workStation9Bean() {
        return new WorkStation("description", WorkStationType.PRIVATO, 4, buildingService.findById(1));
    }

    @Bean
    public WorkStation workStation10Bean() {
        return new WorkStation("description", WorkStationType.PRIVATO, 9, buildingService.findById(3));
    }

   @Bean(name = "workstations")
    List<WorkStation> workStationListBean() {
        List<WorkStation> workStationList = new ArrayList<>();
        workStationList.add(workStation1Bean());
        workStationList.add(workStation2Bean());
        workStationList.add(workStation3Bean());
        workStationList.add(workStation4Bean());
        workStationList.add(workStation5Bean());
        workStationList.add(workStation6Bean());
        workStationList.add(workStation7Bean());
        workStationList.add(workStation8Bean());
        workStationList.add(workStation9Bean());
        workStationList.add(workStation10Bean());
        return workStationList;
    }
}
