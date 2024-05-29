package D3.composite;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class Book implements BookComposite {
    private List<Section> sectionList;
    private List<Author> authorList;
    private double price;

    @Override
    public int countPages() {
        return sectionList.stream().map(Section::countPages).mapToInt(number -> number).sum();
    }

    @Override
    public String print() {
        return sectionList.stream().map(section -> section.print()).collect(Collectors.joining(" // "));
    }
}
