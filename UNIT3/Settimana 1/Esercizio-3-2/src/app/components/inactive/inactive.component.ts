import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent {
  posts!: Post[];

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
}
