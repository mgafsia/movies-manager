import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieSearchComponent} from './movie-search/movie-search.component';
import {SharedUiModule} from '../shared-ui/shared-ui.module';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [MovieSearchComponent,
    MovieListComponent,
    MovieEditComponent],
  exports: [
    MovieSearchComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class MovieModuleModule {
}
