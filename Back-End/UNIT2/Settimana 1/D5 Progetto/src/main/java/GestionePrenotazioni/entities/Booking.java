package GestionePrenotazioni.entities;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    private long id;

    private LocalDate bookingDay;

    @ManyToOne
    @JoinColumn(name = "workstation_id")
    private WorkStation workStation;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    //    CONSTRUCTORS
    public Booking(LocalDate bookingDay, WorkStation workStation, User user) {
        this.bookingDay = bookingDay;
        this.workStation = workStation;
        this.user = user;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", bookingDay=" + bookingDay +
                ", workStation=" + workStation +
                ", user=" + user +
                '}';
    }
}
