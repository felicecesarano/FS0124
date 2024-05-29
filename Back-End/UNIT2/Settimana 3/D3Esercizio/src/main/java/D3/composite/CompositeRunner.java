package D3.composite;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CompositeRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        System.out.println("###  COMPOSITE  ###");
        Page page1 = new Page("page1");
        Page page2 = new Page("page2");
        Page page3 = new Page("page3");
        Page page4 = new Page("page4");
        Page page5 = new Page("page5");
        Page page6 = new Page("page6");
        Page page7 = new Page("page7");
        Page page8 = new Page("page8");
        Page page9 = new Page("page9");
        Page page10 = new Page("page10");

        List<Page> pageList1 = new ArrayList<>();
        pageList1.add(page1);
        pageList1.add(page2);
        pageList1.add(page3);
        SubSection subSection1 = new SubSection(pageList1);

        List<Page> pageList2 = new ArrayList<>();
        pageList2.add(page4);
        pageList2.add(page5);
        pageList2.add(page6);
        pageList2.add(page7);
        pageList2.add(page8);
        SubSection subSection2 = new SubSection(pageList2);

        List<Page> pageList3 = new ArrayList<>();
        pageList3.add(page9);
        pageList3.add(page10);

        List<SubSection> subSectionList = new ArrayList<>();
        subSectionList.add(subSection1);
        subSectionList.add(subSection2);
        Section section1 = new Section(subSectionList, pageList3);

        List<Section> sectionList = new ArrayList<>();
        sectionList.add(section1);
        Author author1 = new Author();
        Author author2 = new Author();
        List<Author> authorList = new ArrayList<>();
        authorList.add(author1);
        authorList.add(author2);
        Book book = new Book(sectionList, authorList, 9.99);

        System.out.println("Book pages: " + book.countPages());
        System.out.println("First section pages: " + section1.countPages());
        System.out.println("Second subsection pages: " + subSection2.countPages());

        System.out.println("Page 1 content: " + page1.print());
        System.out.println("Second subsection content: " + subSection2.print());
        System.out.println("Book content: " + book.print());

        System.out.println("###  END COMPOSITE  ###");
    }
}
