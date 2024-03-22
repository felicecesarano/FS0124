import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-landrover',
  templateUrl: './landrover.component.html',
  styleUrls: ['./landrover.component.scss']
})
export class LandroverComponent {
  car!: Post[];
landRover: Post[] = [];
  constructor() {
    this.getPosts().then((car) => {
      this.car = car;
    
    });
  }

  async getPosts() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    
    for (let item of data) {
      if (item.brand === "LandRover") {
        this.landRover.push(item);
      }
    }
    
    console.log(this.landRover);
    return data;
  }
}
