import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import {SharedUiModule} from '../shared-ui/shared-ui.module';



@NgModule({
  declarations: [MovieSearchComponent],
  exports: [
    MovieSearchComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule
  ]
})
export class MovieModuleModule { }
