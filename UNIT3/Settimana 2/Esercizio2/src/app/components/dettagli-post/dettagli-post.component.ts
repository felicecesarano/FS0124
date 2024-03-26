import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-dettagli-post',
  templateUrl: './dettagli-post.component.html',
  styleUrls: ['./dettagli-post.component.scss'],
})
export class DettagliPostComponent {
  postsDetails!: Post[];

  constructor(private postSrv: PostService) {}

  async ngOnInit(): Promise<void> {
    const currentUrl = window.location.href;
    const lastIndex = currentUrl.lastIndexOf('/');
    const id = currentUrl.substring(lastIndex + 1);
    const convertNumber = parseInt(id);
    const posts = await this.postSrv.getPosts();
    this.postsDetails = posts;
    this.postsDetails = posts.filter((details: Post) => details.id == convertNumber);
    
  }
}

