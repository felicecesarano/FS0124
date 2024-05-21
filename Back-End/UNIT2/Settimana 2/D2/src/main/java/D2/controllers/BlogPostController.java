package D2.controllers;

import D2.entities.BlogPost;
import D2.services.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blogposts")
public class BlogPostController {

    @Autowired
    private BlogPostService blogPostService;

    @GetMapping
    private List<BlogPost> getBlogPosts() {
        return this.blogPostService.findAll();
    }

    @PostMapping
    private BlogPost save(@RequestBody BlogPost blogPost) {
        blogPostService.save(blogPost);
        return blogPost;
    }

    @GetMapping("/{blogPostId}")
    private BlogPost findById(@PathVariable long blogPostId) {
        return blogPostService.findById(blogPostId);
    }

    @PutMapping("/{blogPostId}")
    private BlogPost findByIdAndUpdate(@PathVariable long blogPostId, @RequestBody BlogPost updatedBlogPost) {
        return blogPostService.findByIdAndUpdate(blogPostId, updatedBlogPost);
    }

    @DeleteMapping("/{blogPostId}")
    private void findByIdAndDelete(@PathVariable long blogPostId) {
        blogPostService.findByIdAndDelete(blogPostId);
    }

}
