import { Component, OnInit } from '@angular/core';
import { Favorites } from 'src/app/models/favorites.interface';
import { FavoritesService } from 'src/app/service/favorites.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Movies } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: Favorites[] = [];
  movies: Movies[] = [];
  selectedMovie: Movies | null = null;

  constructor(
    private favoritesSrv: FavoritesService,
    private authSrv: AuthService,
    private moviesSrv: MoviesService
  ) { }

  ngOnInit() {
    this.getUserFavorites();
  }

  getUserFavorites() {
    const currentUser = this.authSrv.getCurrentUser();
    if (currentUser) {
      this.favoritesSrv.getFavorites().subscribe(data => {
        this.favorites = data.filter(favorite => favorite.userId === currentUser.user.id);

        this.moviesSrv.getMovies().subscribe(movies => {
          this.movies = movies.filter(movie => this.favorites.some(favorite => favorite.movieId === movie.id));
        });
      });
    }
  }

  openModal(movie: Movies) {
    this.selectedMovie = movie;
    document.getElementById('movieModal')!.style.display = 'block';
  }

  closeModal() {
    this.selectedMovie = null;
    document.getElementById('movieModal')!.style.display = 'none';
  }

  toggleFavorite(movieId: number) {
    const currentUser = this.authSrv.getCurrentUser();
    if (!currentUser || currentUser.user.id === undefined) {
      console.error('Dati utente o genere non validi.');
      return;
    }
  
    const userId = currentUser.user.id;
    const index = this.favorites.findIndex(favorite => favorite.movieId === movieId);
    if (index !== -1) {
      const favoriteId = this.favorites[index].id;
      this.favoritesSrv.removeFavorite(favoriteId).subscribe(() => {
        // Rimozione completata, ricarica i preferiti
        this.getUserFavorites();
      });
    } else {
      const newFavorite: Partial<Favorites> = { userId, movieId};
      this.favoritesSrv.addFavorite(newFavorite).subscribe(value => {
        this.favorites.push(value);
      });
    }
}


  isFavorite(movieId: number): boolean {
    return this.favorites.some(favorite => favorite.movieId === movieId);
  }
}
