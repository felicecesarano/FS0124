import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})

export class AllPostComponent implements OnInit {
  posts!: Post[];
  filteredPosts: Post[] = [];
  selectedPost: Post | null = null;

  constructor(private postSrv: PostService) {}

  async ngOnInit(): Promise<void> {
    const posts = await this.postSrv.getPosts();
    this.posts = posts;
    this.filteredPosts = posts; 
  }

  editPost(post: Post){
    this.selectedPost = post;
  }

  updatePost(updatedPost: Post) {
    const index = this.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
    }
    this.selectedPost = null;
  }

  updateFilteredPosts(filteredPosts: Post[]) {
    this.filteredPosts = filteredPosts;
  }
}
