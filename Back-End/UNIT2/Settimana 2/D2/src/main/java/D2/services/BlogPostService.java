package D2.services;

import D2.entities.BlogPost;
import D2.exceptions.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

@Service
public class BlogPostService {
    private List<BlogPost> blogPostList = new ArrayList<>();

    public List<BlogPost> findAll() {
        return this.blogPostList;
    }

    public void save(BlogPost newBlogPost) {
        Random random = new Random();
        newBlogPost.setId(random.nextInt(1, 10000));
        this.blogPostList.add(newBlogPost);
    }

    public BlogPost findById(long blogPostId) {
        BlogPost found = null;
        for (BlogPost blogPost : this.blogPostList) {
            if (blogPost.getId() == blogPostId) found = blogPost;
        }
        if (found == null) throw new NotFoundException(blogPostId);
        else return found;
    }

    public BlogPost findByIdAndUpdate(long blogPostId, BlogPost updatedBlogPost) {
        BlogPost found = findById(blogPostId);
        found.setBlogType(updatedBlogPost.getBlogType());
        found.setTitle(updatedBlogPost.getTitle());
        found.setCover(updatedBlogPost.getCover());
        found.setContent(updatedBlogPost.getContent());
        found.setReadingTime(updatedBlogPost.getReadingTime());
        save(found);
        return found;
    }

    public void findByIdAndDelete(long blogPostId) {
        Iterator<BlogPost> iterator = this.blogPostList.iterator();
        while (iterator.hasNext()) {
            BlogPost current = iterator.next();
            if (current.getId() == blogPostId) {
                iterator.remove();
            }
        }
    }
}
