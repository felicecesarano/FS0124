import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss']
})
export class FiatComponent {
  car!: Post[];
fiat: Post[] = [];
  constructor() {
    this.getPosts().then((car) => {
      this.car = car;
    
    });
  }

  async getPosts() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    
    for (let item of data) {
      if (item.brand === "Fiat") {
        this.fiat.push(item);
      }
    }
    
    console.log(this.fiat);
    return data;
  }
}
