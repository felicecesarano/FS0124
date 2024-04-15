import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent {
    posts!: Post[];
    randomPosts: Post[] = [];
  
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
      const numRandomPosts = 2;
      for (let i = 0; i < numRandomPosts; i++) {
        const randomIndex = Math.floor(Math.random() * this.posts.length);
        this.randomPosts.push(this.posts[randomIndex]);
      }
    }
  }

