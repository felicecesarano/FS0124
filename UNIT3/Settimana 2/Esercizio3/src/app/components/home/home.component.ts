import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';

  @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  products: Products[] = [];

  constructor(private productsSrv: ProductsService){}

  ngOnInit(): void {
      this.readProduct();
  }

  readProduct(){
    this.productsSrv.getProducts().subscribe((products) => {
      this.products = products.products
      console.log(this.products)
    })
  }

}
