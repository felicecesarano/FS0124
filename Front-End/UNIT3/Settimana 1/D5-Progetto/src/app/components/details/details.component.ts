import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
carDetails!: Post[];

  constructor() {
    this.carDetails = [];
    this.getPosts().then((car) => {
      this.carDetails = car;
    });
  }

  async getPosts() {
    const currentUrl = window.location.href;
    const lastIndex = currentUrl.lastIndexOf('/');
    const id = currentUrl.substring(lastIndex + 1);
    const convertNumber = parseInt(id);
    let response = await fetch('assets/db.json');
    let data = await response.json();
    const details = data.filter((details: Post) => details.id == convertNumber);
    return details;
  }
}
