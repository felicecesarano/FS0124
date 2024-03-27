import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.interface';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<{products: Product[]}> {
    return this.http.get<{products: Product[]}>(this.apiUrl);
  }
}
