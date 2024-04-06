import { Component, OnInit } from '@angular/core';
import { Favorites } from 'src/app/models/favorites.interface';
import { FavoritesService } from 'src/app/service/favorites.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Movies } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/service/movies.service'; // Aggiunto import

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: Favorites[] = [];
  movies: Movies[] = [];

  constructor(
    private favoritesSrv: FavoritesService,
    private authSrv: AuthService,
    private moviesSrv: MoviesService // Aggiunto nel costruttore
  ) { }

  ngOnInit() {
    this.getUserFavorites();
  }

  getUserFavorites() {
    const currentUser = this.authSrv.getCurrentUser();
    if (currentUser) {
      this.favoritesSrv.getFavorites().subscribe(data => {
        this.favorites = data.filter(favorite => favorite.userId === currentUser.user.id);
        
        // Ottieni l'elenco completo dei film
        this.moviesSrv.getMovies().subscribe(movies => {
          // Filtra i film preferiti dall'elenco completo dei film
          this.movies = movies.filter(movie => this.favorites.some(favorite => favorite.movieId === movie.id));
          console.log(this.movies);
        });
      });
    }
  }
}
