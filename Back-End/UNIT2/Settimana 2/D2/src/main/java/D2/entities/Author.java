package D2.entities;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

import java.time.LocalDate;

@Data
public class Author {
    private long id;
    private String name, surname, email;
    private LocalDate birthday;
    @Setter(AccessLevel.NONE)
    private String avatar;

    public Author(String name, String surname, String email, LocalDate birthday) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.birthday = birthday;
        setAvatar();
    }

    public void setAvatar() {
        this.avatar = "https://ui-avatars.com/api/?name=" + this.name + "+" + this.surname;
    }
}
