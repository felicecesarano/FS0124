import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Movies } from '../models/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiURL= environment.apiURL

  constructor(private http: HttpClient) {}
  
  getMovies(){
    return this.http.get<Movies[]>(`${this.apiURL}movies-popular`)
  }

  getFavorite(id: number){
    return this.http.get<Movies>(`${this.apiURL}movies-popular/${id}`)
  }
}
