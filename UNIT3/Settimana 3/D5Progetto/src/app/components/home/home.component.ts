import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies.interface';
import { MoviesService } from 'src/app/service/movies.service';
import { Genres } from 'src/app/models/genres.interface';
import { GenresService } from 'src/app/service/genres.service';
import { Favorites } from 'src/app/models/favorites.interface';
import { FavoritesService } from 'src/app/service/favorites.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movies[] = [];
  genres: Genres[] = [];
  favorites: Favorites[] = [];

  constructor(
    private moviesSrv: MoviesService,
    private genresSrv: GenresService,
    private favoritesSrv: FavoritesService,
    private authSrv: AuthService
  ) {}

  ngOnInit() {
    this.getMovies();
    this.getGenres();
    this.getUserFavorites();
  }

  async getMovies() {
    this.moviesSrv.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  async getGenres() {
    this.genresSrv.getGenres().subscribe(data => {
      this.genres = data;
    });
  }

  async getUserFavorites() {
    const currentUser = this.authSrv.getCurrentUser();
    if (currentUser) {
      this.favoritesSrv.getFavorites().subscribe(data => {
        this.favorites = data.filter(favorite => favorite.userId === currentUser.user.id);
      });
    }
  }
}
