package D3.payload;

import D3.enums.BlogType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class BlogPostPayload {
    private BlogType blogType;
    private String title, content, cover;
    private int readingTime;
    private long authorId;
}
