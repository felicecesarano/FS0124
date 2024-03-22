import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-featured-car',
  templateUrl: './featured-car.component.html',
  styleUrls: ['./featured-car.component.scss'],
})
export class FeaturedCarComponent {
  car!: Post[];
  randomCar: Post[] = [];

  constructor() {
    this.getPosts().then((car) => {
      this.car = car;
      this.random();
    });
  }

  async getPosts() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    console.log(data);
    return data;
  }

  random() {
    const numRandomCar = 3;
    const carExtracted: number[] = [];

    while (this.randomCar.length < numRandomCar) {
      const randomIndex = Math.floor(Math.random() * this.car.length);

      if (!carExtracted.includes(randomIndex)) {
        this.randomCar.push(this.car[randomIndex]);

        carExtracted.push(randomIndex);
      }
    }
  }
}
