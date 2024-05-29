package D3.composite;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class Section implements BookComposite {
    private List<SubSection> subSectionList;
    private List<Page> pageList;

    @Override
    public int countPages() {
        int subSectionPages = subSectionList.stream().map(SubSection::countPages).mapToInt(number -> number).sum();
        int pagesNumber = pageList.size();
        return subSectionPages + pagesNumber;
    }

    @Override
    public String print() {
        String subsContent = subSectionList.stream().map(subSection -> subSection.print()).collect(Collectors.joining(" / "));
        String pageContent = pageList.stream().map(page -> page.print()).collect(Collectors.joining("  "));
        return subsContent + " / " + pageContent;
    }
}
