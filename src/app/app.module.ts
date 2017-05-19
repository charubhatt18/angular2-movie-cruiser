import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MovieAppMaterialModule } from './movie-app-material.module';
import { SearchModule } from './search/search.module';

import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie/movie-details.component';
import { MovieService } from './movie/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MovieAppMaterialModule,
    SearchModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
