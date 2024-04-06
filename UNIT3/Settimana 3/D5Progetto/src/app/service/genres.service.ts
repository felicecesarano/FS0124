import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Genres } from '../models/genres.interface';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  apiURL= environment.apiURL

  constructor(private http: HttpClient) {}
  
  getGenres(){
    return this.http.get<Genres[]>(`${this.apiURL}genres`)
  }
}
