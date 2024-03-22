import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})

export class BrandComponent {
  car!: Post[];
  logo: { brand: string, brandLogo: string }[] = [];

  constructor() {
    this.getPosts().then((car: Post[]) => { 
      this.car = car;
      this.logo = this.brandLogo(car);
    });
  }

  async getPosts(): Promise<Post[]> {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    return data;
  }

  brandLogo(car: Post[]): { brand: string, brandLogo: string }[] {
    const brand: { brand: string, brandLogo: string }[] = [];
    car.forEach(post => {
      const exists = brand.some(item => item.brand === post.brand && item.brandLogo === post.brandLogo);
      if (!exists) {
        brand.push({ brand: post.brand, brandLogo: post.brandLogo });
      }
    });
    return brand;
  }
}
