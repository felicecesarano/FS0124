package D3.controllers;

import D3.payload.BlogPostPayload;
import D3.entities.BlogPost;
import D3.services.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/blogposts")
public class BlogPostController {

    @Autowired
    private BlogPostService blogPostService;

    @GetMapping
    private Page<BlogPost> getBlogPosts(@RequestParam(defaultValue = "0") int number, @RequestParam(defaultValue = "20") int size, @RequestParam(defaultValue = "id") String orderBy) {
        return this.blogPostService.findAll(number, size, orderBy);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    private BlogPost save(@RequestBody BlogPostPayload blogPostPayload) {
        return blogPostService.save(blogPostPayload);
    }

    @GetMapping("/{blogPostId}")
    private BlogPost findById(@PathVariable long blogPostId) {
        return blogPostService.findById(blogPostId);
    }

    @PutMapping("/{blogPostId}")
    private BlogPost findByIdAndUpdate(@PathVariable long blogPostId, @RequestBody BlogPostPayload updatedBlogPost) {
        return blogPostService.findByIdAndUpdate(blogPostId, updatedBlogPost);
    }

    @DeleteMapping("/{blogPostId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    private void findByIdAndDelete(@PathVariable long blogPostId) {
        blogPostService.findByIdAndDelete(blogPostId);
    }

}
