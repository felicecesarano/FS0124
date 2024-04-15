import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-evidenza',
  templateUrl: './evidenza.component.html',
  styleUrls: ['./evidenza.component.scss'],
})

export class EvidenzaComponent {
  posts!: Post[];
  randomPost!: Post;

  constructor() {
    this.getPosts().then((posts) => {
      this.posts = posts;
      this.random();
    });
  }

  async getPosts() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    return data;
  }

  random() {
    const randomIndex = Math.floor(Math.random() * this.posts.length);
    this.randomPost = this.posts[randomIndex];
  }
}




