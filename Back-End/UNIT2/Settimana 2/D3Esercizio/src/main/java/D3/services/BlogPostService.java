package D3.services;

import D3.dao.BlogPostDAO;
import D3.entities.BlogPost;
import D3.exceptions.NotFoundException;
import D3.payload.BlogPostPayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class BlogPostService {

    @Autowired
    private BlogPostDAO bpd;

    @Autowired
    private AuthorService authorService;

    public Page<BlogPost> findAll(int number, int size, String sortBy) {
        Pageable pageable = PageRequest.of(number, size, Sort.by(sortBy));
        return this.bpd.findAll(pageable);
    }

    public BlogPost findById(long blogPostId) {
        return this.bpd.findById(blogPostId).orElseThrow(() -> new NotFoundException(blogPostId));
    }

    public BlogPost save(BlogPostPayload blogPostPayload) {
        return this.bpd.save(new BlogPost(blogPostPayload.getBlogType(), blogPostPayload.getTitle(), blogPostPayload.getContent(), blogPostPayload.getCover(), blogPostPayload.getReadingTime(), authorService.findById(blogPostPayload.getAuthorId())));
    }


    public BlogPost findByIdAndUpdate(long blogPostId, BlogPostPayload updatedBlogPost) {
        BlogPost found = findById(blogPostId);
        found.setBlogType(updatedBlogPost.getBlogType());
        found.setTitle(updatedBlogPost.getTitle());
        found.setCover(updatedBlogPost.getCover());
        found.setContent(updatedBlogPost.getContent());
        found.setReadingTime(updatedBlogPost.getReadingTime());
        return this.bpd.save(found);
    }

    public void findByIdAndDelete(long blogPostId) {
        BlogPost found = findById(blogPostId);
        this.bpd.delete(found);
    }
}
