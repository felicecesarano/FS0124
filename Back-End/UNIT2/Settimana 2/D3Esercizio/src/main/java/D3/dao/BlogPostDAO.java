package D3.dao;

import D3.entities.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogPostDAO extends JpaRepository<BlogPost, Long> {
}
