package D3.composite;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class SubSection implements BookComposite {
    private List<Page> pageList;

    @Override
    public int countPages() {
        return pageList.size();
    }

    @Override
    public String print() {
        return pageList.stream().map(page -> page.print()).collect(Collectors.joining("  "));
    }
}
