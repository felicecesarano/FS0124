import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent {
  posts!: Post[];
  selectedPost: Post | null = null;

  constructor() {
    this.getPosts().then((posts) => {
      this.posts = posts;
    
    });
  }

  async getPosts() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    return data;
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
