import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/products.interface';
import { CartItemService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // Array che contiene gli elementi nel carrello
  cartList: CartItem[] = [];
  
  // Variabile che conterrà il totale del prezzo
  total!: number;

  constructor(private cartSrv: CartItemService) {}

  // Metodo che viene chiamato quando il componente viene inizializzato
  ngOnInit(): void {
    // Sottoscrizione all'observable myCart del servizio del carrello
    this.cartSrv.myCart.subscribe((cart) => {
      // Aggiorna la lista del carrello con il valore ricevuto dall'observable
      this.cartList = cart;
      // Calcola il totale del prezzo del carrello
      this.totalPrice();
    });
  }

  // Metodo per calcolare il totale del prezzo del carrello
  totalPrice() {
    // Utilizza il metodo reduce sull'array cartList per sommare i totali di ogni elemento nel carrello
    this.total = this.cartList.reduce((previous, current) => previous + current.totalPrice, 0);
  }

  // Metodo per rimuovere un elemento dal carrello
  delete(id: number) {
    // Chiama il metodo del servizio del carrello per rimuovere l'elemento con l'id specificato
    this.cartSrv.removeFromCart(id);
  }
}
