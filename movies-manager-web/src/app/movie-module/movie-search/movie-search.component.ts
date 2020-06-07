import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Movie} from '../../models/movie.model';
import {MovieService} from '../../services/movie.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  isDisplaySpinner = false;
  movieSubscription: Subscription;

  constructor(private movieService: MovieService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  searchMovies(primaryTitle, originalTitle) {
    if (!primaryTitle || !originalTitle) return;
    this.isDisplaySpinner = true;
    this.movieSubscription = this.movieService.getMovieSearchSubscription(primaryTitle, originalTitle).subscribe( results  => {
        this.movies = results;
        this.isDisplaySpinner = false;
      }
      ,
      (error) => {
        this.isDisplaySpinner = false;
        this._snackBar.open('Server Error !', null, {
          duration: 2000
        });
      }
    );
  }

  ngOnDestroy(): void {
    if (this.movieSubscription) {
      this.movieSubscription.unsubscribe();
    }
  }
}
