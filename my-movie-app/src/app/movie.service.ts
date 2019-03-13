import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = 'dd53f34293068294e9be03e8253d59c7';
  private movie_string: string;
  private id: number;

  constructor(public _http: HttpClient) { }

  searchMovie(movie: string) {
    this.movie_string = movie;
    return this._http.get(this.movie_url + 'search/movie?query=' + this.movie_string + '&api_key=' + this.api_key);
  }

  getUpcomingMovies() {
    return this._http.get(this.movie_url + 'discover/movie?primary_release_date.gte=2018-04-15&primary_release_date.lte=2018-07-31' + '&api_key=' + this.api_key);
  }

  getPopularMovies() {
    return this._http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
  }
  getMovie(id: number) {
    return this._http.get(this.movie_url + '/movie' + id + '?api_key=' + this.api_key);
  }
}

