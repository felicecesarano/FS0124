import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Favorites } from '../models/favorites.interface';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  apiURL= environment.apiURL

  constructor(private http: HttpClient) {}
  
  getFavorites() {
    return this.http.get<Favorites[]>(`${this.apiURL}favorites`);
  }

  addFavorite(favorite: Partial<Favorites>) {
    console.log(favorite)
    return this.http.post<Favorites>(`${this.apiURL}favorites`, favorite);
  }

  removeFavorite(id: number) {
    return this.http.delete<void>(`${this.apiURL}favorites/${id}`);
  }

}
