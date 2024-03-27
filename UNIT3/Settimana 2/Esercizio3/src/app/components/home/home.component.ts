import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: Product[] | undefined;
  total: number = 0;
  cartItems: { productName: string; price: number; }[] = [];
  favorites: string[] = []; 
  add?: boolean;
  

  constructor(private productSrv: ProductsService) {

  }

  ngOnInit(): void {
    this.readProduct();
  }

  readProduct() {
    this.productSrv.getProduct().subscribe((product) => {
      this.product = product.products
      console.log(this.product)
    })
  }

  addToCart(product: Product) {
    this.total += product.price;
    this.cartItems.push({ productName: product.title, price: product.price });
  }

  deleteFromCart(product: { productName: string; price: number; }) {
    this.total -= product.price;
    const index = this.cartItems.findIndex(item => item.productName === product.productName);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  addToFavorites(product: Product) {
    const index = this.favorites.indexOf(product.title);
    if (index === -1) {
      this.favorites.push(product.title); // Aggiungi l'identificatore del prodotto ai preferiti
    } else {
      this.favorites.splice(index, 1); // Rimuovi l'identificatore del prodotto dai preferiti
    }
  }

  isProductInFavorites(product: Product): boolean {
    const isInFavorites = this.favorites.includes(product.title); // Verifica se il prodotto è nei preferiti
    return isInFavorites;
  }
}
