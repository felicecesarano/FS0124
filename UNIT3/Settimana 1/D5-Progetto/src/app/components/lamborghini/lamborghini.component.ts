import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-lamborghini',
  templateUrl: './lamborghini.component.html',
  styleUrls: ['./lamborghini.component.scss']
})
export class LamborghiniComponent {
  car!: Post[];
  lamborghini: Post[] = [];
    constructor() {
      this.getPosts().then((car) => {
        this.car = car;
      
      });
    }
  
    async getPosts() {
      let response = await fetch('assets/db.json');
      let data = await response.json();
      
      for (let item of data) {
        if (item.brand === "Lamborghini") {
          this.lamborghini.push(item);
        }
      }
      
      console.log(this.lamborghini);
      return data;
    }
}
