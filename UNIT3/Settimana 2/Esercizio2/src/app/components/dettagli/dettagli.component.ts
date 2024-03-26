import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss'],
})
export class DettagliComponent implements OnInit {
  posts!: Post[];
  randomPosts: Post[] = [];

  constructor(private postSrv: PostService) {}

  async ngOnInit(): Promise<void> {
    const posts = await this.postSrv.getPosts();
    this.posts = posts;
    this.random();
  }

  random() {
    const numRandomPosts = 2;
    for (let i = 0; i < numRandomPosts; i++) {
      const randomIndex = Math.floor(Math.random() * this.posts.length);
      this.randomPosts.push(this.posts[randomIndex]);
    }
  }
}
