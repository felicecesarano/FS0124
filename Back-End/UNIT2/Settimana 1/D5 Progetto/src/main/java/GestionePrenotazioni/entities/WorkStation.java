package GestionePrenotazioni.entities;

import GestionePrenotazioni.enums.WorkStationType;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "work_station")
@Getter
@Setter
@NoArgsConstructor
public class WorkStation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private long id;

    private String description;

    @Enumerated(EnumType.STRING)
    private WorkStationType workStationType;

    private int maxOccupants;

    @ManyToOne
    @JoinColumn(name = "building_id")
    private Building building;

    @OneToMany(mappedBy = "workStation")
    private List<Booking> bookingList;

    //    CONSTRUCTORS
    public WorkStation(String description, WorkStationType workStationType, int maxOccupants, Building building) {
        this.description = description;
        this.workStationType = workStationType;
        this.maxOccupants = maxOccupants;
        this.building = building;
    }

    @Override
    public String toString() {
        return "WorkStation{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", workStationType=" + workStationType +
                ", maxOccupants=" + maxOccupants +
                ", building=" + building +
                '}';
    }
}
