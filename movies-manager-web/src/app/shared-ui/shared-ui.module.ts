import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchByFieldsComponent } from './search-by-fields/search-by-fields.component';



@NgModule({
  declarations: [SearchByFieldsComponent],
  exports: [
    SearchByFieldsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedUiModule { }
