import { Injectable } from '@angular/core';
import { CartItem } from '../models/products.interface';
import { Products } from '../models/products.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  // Array contenente gli elementi nel carrello
  private cart: CartItem[] = [];

  // BehaviorSubject per tenere traccia degli aggiornamenti del carrello
  public myCart = new BehaviorSubject<CartItem[]>([]);

  constructor() { }

  // Aggiunge un prodotto al carrello
  addToCart(product: Products) {
    // Verifica se il prodotto è già presente nel carrello
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      // Se il prodotto esiste già, aumenta la quantità e aggiorna il prezzo totale
      existingProduct.amount++;
      existingProduct.totalPrice = existingProduct.price * existingProduct.amount;
    } else {
      // Se il prodotto non esiste, lo aggiunge al carrello con la quantità 1
      this.cart.push({ ...product, amount: 1, totalPrice: product.price });
    }
    // Aggiorna il BehaviorSubject con il nuovo stato del carrello
    this.cartList();
  }

  // Rimuove un prodotto dal carrello
  removeFromCart(id: number) {
    // Trova l'indice del prodotto nel carrello
    const index = this.cart.findIndex(item => item.id === id);
    if (index !== -1) {
      // Se il prodotto esiste nel carrello, riduci la quantità
      this.cart[index].amount--;
      // Se la quantità è 0, rimuovi completamente il prodotto dal carrello
      if (this.cart[index].amount === 0) {
        this.cart.splice(index, 1);
      } else {
        // Altrimenti, aggiorna il prezzo totale
        this.cart[index].totalPrice = this.cart[index].price * this.cart[index].amount;
      }
      // Aggiorna il BehaviorSubject con il nuovo stato del carrello
      this.cartList();
    }
  }

  // Aggiorna il BehaviorSubject con il nuovo stato del carrello
  private cartList() {
    this.myCart.next(this.cart);
  }
}
