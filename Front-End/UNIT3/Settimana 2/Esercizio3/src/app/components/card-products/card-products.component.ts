import { Component, Input } from '@angular/core';
import { Products } from 'src/app/models/products.interface';
import { CartItemService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss']
})
export class CardProductsComponent {

@Input() products!: Products

constructor(private cartSrv: CartItemService){}

addToCard(products: Products){
  this.cartSrv.addToCart(products);
}

}
