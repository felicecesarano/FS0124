package D2.controllers;

import D2.services.AuthorService;
import D2.entities.Author;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/authors")
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @GetMapping
    private List<Author> getAuthors() {
        return authorService.findAll();
    }

    @PostMapping
    private Author postAuthor(@RequestBody Author newAuthor) {
        return authorService.save(newAuthor);
    }

    @GetMapping("/{authorId}")
    private Author getAuthorById(@PathVariable long authorId) {
        return authorService.findById(authorId);
    }

    @PutMapping("/{authorId}")
    private Author putAuthorById(@PathVariable long authorId, @RequestBody Author updatedAuthor) {
        return authorService.findByIdAndUpdate(authorId, updatedAuthor);
    }

    @DeleteMapping("/{authorId}")
    private void deleteAuthor(@PathVariable long authorId) {
        authorService.findByIdAndDelete(authorId);
    }
}
