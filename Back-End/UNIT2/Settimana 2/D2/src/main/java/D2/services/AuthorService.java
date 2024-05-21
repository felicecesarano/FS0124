package D2.services;

import D2.entities.Author;
import D2.exceptions.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

@Service
public class AuthorService {
    List<Author> authorList = new ArrayList<>();

    public List<Author> findAll() {
        return this.authorList;
    }

    public Author save(Author newAuthor) {
        Random random = new Random();
        newAuthor.setId(random.nextInt(1, 10000));
        newAuthor.setAvatar();
        this.authorList.add(newAuthor);
        return newAuthor;
    }

    public Author findById(long authorId) {
        Author found = null;
        for (Author author : this.authorList) {
            if (author.getId() == authorId) found = author;
        }
        if (found == null) throw new NotFoundException(authorId);
        else return found;
    }

    public Author findByIdAndUpdate(long authorId, Author updatedAuthor) {
        Author found = findById(authorId);
        found.setName(updatedAuthor.getName());
        found.setSurname(updatedAuthor.getSurname());
        found.setEmail(updatedAuthor.getEmail());
        found.setBirthday(updatedAuthor.getBirthday());
        found.setAvatar();
        return found;
    }

    public void findByIdAndDelete(long authorId) {
        Iterator<Author> iterator = authorList.iterator();
        while (iterator.hasNext()) {
            Author current = iterator.next();
            if (current.getId() == authorId) iterator.remove();
        }
    }
}
