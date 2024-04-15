import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-ferrari',
  templateUrl: './ferrari.component.html',
  styleUrls: ['./ferrari.component.scss']
})
export class FerrariComponent {
  car!: Post[];
  ferrari: Post[] = [];
    constructor() {
      this.getPosts().then((car) => {
        this.car = car;
      
      });
    }
  
    async getPosts() {
      let response = await fetch('assets/db.json');
      let data = await response.json();
      
      for (let item of data) {
        if (item.brand === "Ferrari") {
          this.ferrari.push(item);
        }
      }
      
      console.log(this.ferrari);
      return data;
    }
}
