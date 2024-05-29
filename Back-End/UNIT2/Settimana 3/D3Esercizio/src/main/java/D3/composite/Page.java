package D3.composite;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Page implements BookComposite {
    private String content;

    @Override
    public int countPages() {
        return 1;
    }

    @Override
    public String print() {
        return content;
    }
}
