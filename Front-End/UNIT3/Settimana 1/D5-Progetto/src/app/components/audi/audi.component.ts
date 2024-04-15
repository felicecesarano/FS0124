import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss']
})

export class AudiComponent {
  car!: Post[];
audi: Post[] = [];
  constructor() {
    this.getPosts().then((car) => {
      this.car = car;
    
    });
  }

  async getPosts() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    
    for (let item of data) {
      if (item.brand === "Audi") {
        this.audi.push(item);
      }
    }
    
    console.log(this.audi);
    return data;
  }
}
