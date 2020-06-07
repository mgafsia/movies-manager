import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Movie} from '../../models/movie.model';
import {MatTableDataSource} from '@angular/material/table';
import {MovieEditComponent} from '../movie-edit/movie-edit.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() isDisplaySpinner;
  dataSource: MatTableDataSource<Movie>;

  displayedColumns: string[] = ['originalTitle', 'startYear', 'genres', 'action'];
  constructor(public dialog: MatDialog) {
  }

  get isDisplayTable() {
    return this.movies && this.movies.length > 0 && !this.isDisplaySpinner;
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(MovieEditComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.movies);
  }
}
