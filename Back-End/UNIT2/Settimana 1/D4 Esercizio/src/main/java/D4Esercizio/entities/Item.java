package D4Esercizio.entities;

import jakarta.persistence.Table;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Getter
@NoArgsConstructor
public abstract class Item {

    protected int calories;
    protected double price;
    @Id
    @GeneratedValue
    private long id;

    public Item(int calories, double price) {
        this.calories = calories;
        this.price = price;
    }

}
