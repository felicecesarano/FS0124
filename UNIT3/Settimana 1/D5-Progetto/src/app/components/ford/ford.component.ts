import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.scss']
})
export class FordComponent {
  car!: Post[];
ford: Post[] = [];
  constructor() {
    this.getPosts().then((car) => {
      this.car = car;
    
    });
  }

  async getPosts() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    
    for (let item of data) {
      if (item.brand === "Ford") {
        this.ford.push(item);
      }
    }
    
    console.log(this.ford);
    return data;
  }
}
