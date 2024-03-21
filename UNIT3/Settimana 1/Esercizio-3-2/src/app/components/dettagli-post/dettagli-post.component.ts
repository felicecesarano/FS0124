import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-dettagli-post',
  templateUrl: './dettagli-post.component.html',
  styleUrls: ['./dettagli-post.component.scss'],
})
export class DettagliPostComponent {
  postsDetails!: Post[];

  constructor() {
    this.postsDetails = [];
    this.getPosts().then((posts) => {
      this.postsDetails = posts;
    });
  }

  async getPosts() {
    const currentUrl = window.location.href;
    const lastIndex = currentUrl.lastIndexOf('/');
    const id = currentUrl.substring(lastIndex + 1);
    const convertNumber = parseInt(id);
    let response = await fetch('assets/db.json');
    let data = await response.json();
    const postsDetails = data.filter((details: Post) => details.id == convertNumber);
    return postsDetails;
  }
}

