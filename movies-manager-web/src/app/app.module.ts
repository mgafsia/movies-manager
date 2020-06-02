import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MovieModuleModule} from './movie-module/movie-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        MovieModuleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
