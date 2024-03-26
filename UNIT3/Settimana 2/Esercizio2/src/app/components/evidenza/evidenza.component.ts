import { Component, OnInit} from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-evidenza',
  templateUrl: './evidenza.component.html',
  styleUrls: ['./evidenza.component.scss'],
})

export class EvidenzaComponent implements OnInit {
  posts!: Post[];
  randomPost!: Post;

  constructor(private postSrv: PostService) {
  }

  async ngOnInit(): Promise<void> {
      const posts = await this.postSrv.getPosts()
      this.posts = posts;
      this.random();
  }

  random() {
    const randomIndex = Math.floor(Math.random() * this.posts.length);
    this.randomPost = this.posts[randomIndex];
  }
}




