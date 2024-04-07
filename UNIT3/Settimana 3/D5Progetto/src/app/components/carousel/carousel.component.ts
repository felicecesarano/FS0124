import { Component, Input } from '@angular/core';
import { Favorites } from 'src/app/models/favorites.interface';
import { Genres } from 'src/app/models/genres.interface';
import { Movies } from 'src/app/models/movies.interface';
import { FavoritesService } from 'src/app/service/favorites.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() genres: Genres[] = [];
  @Input() movies: Movies[] = [];
  @Input() favorites: Favorites[] = [];
  selectedMovie: Movies | null = null;

  constructor(private favoritesSrv: FavoritesService, private authSrv: AuthService) { }

  getMoviesByGenre(genre_ids: number): Movies[] {
    return this.movies.filter(movie => movie.genre_ids.includes(genre_ids));
  }

  getMoviesForCarousel(genreId: number, startIndex: number, repeatCount: number): Movies[] {
    const movies = this.getMoviesByGenre(genreId);
    const repeatedMovies: Movies[] = [];

    for (let i = 0; i < repeatCount; i++) {
      repeatedMovies.push(movies[(startIndex + i) % movies.length]);
    }

    return repeatedMovies;
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
      this.favorites.splice(index, 1);
      this.favoritesSrv.removeFavorite(favoriteId).subscribe();
    } else {
      const newFavorite: Partial<Favorites> = { userId, movieId};
      this.favoritesSrv.addFavorite(newFavorite).subscribe(value => {
        this.favorites.push(value)
      });
    }
  }

  isFavorite(movieId: number): boolean {
    return this.favorites.some(favorite => favorite.movieId === movieId);
  }
}
