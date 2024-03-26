import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent implements OnInit {
  posts!: Post[];
  selectedPost: Post | null = null;

  constructor(private postSrv: PostService) {
  }

  async ngOnInit(): Promise<void> {
      const posts = await this.postSrv.getPosts()
      this.posts = posts;
  }

  editPost(post: Post){
    this.selectedPost = post;
    console.log('Selected Post:', this.selectedPost);
  }

  updatePost(updatedPost: Post) {
    const index = this.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
    }
    
    this.selectedPost = null;
  }
}
