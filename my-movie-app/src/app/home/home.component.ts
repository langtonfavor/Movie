import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popular_movies: any;
  upcoming_movies: any;
  search_results: any;
  movie: any;
  constructor(public movieService: MovieService) {
    // this is for all upcoming movie
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
    });
    // get popular movies
    this.movieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
      // console.log(this.popular_movies);
    });
  }
  // we need to get all the movies reslts
  searchMovies() {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.search_results = data['results'];
    });
  }
  ngOnInit() {
  }

}
