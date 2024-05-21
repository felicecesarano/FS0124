package D2.entities;

import D2.enums.BlogType;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BlogPost {
    private long id;
    private BlogType blogType;
    private String title, content, cover;
    private int readingTime;
}
