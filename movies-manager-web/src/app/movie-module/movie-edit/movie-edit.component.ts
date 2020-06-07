import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Movie} from '../../models/movie.model';
import {MovieService} from '../../services/movie.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit, OnDestroy {

  isDisplaySpinner = false;
  movieSubscription: Subscription;

  constructor(public dialogRef: MatDialogRef<MovieEditComponent>,
              @Inject(MAT_DIALOG_DATA) public movie: Movie,
              private movieService: MovieService) { }

  ngOnInit(): void {
  }

  updateMovie() {
    this.isDisplaySpinner = true;
     this.movieService.updateMovieSubscription(this.movie).subscribe(() => {
        this.isDisplaySpinner = false;
        this.dialogRef.close();
       }
     );
  }

  cancel(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    if (this.movieSubscription) {
      this.movieSubscription.unsubscribe();
    }
  }
}
