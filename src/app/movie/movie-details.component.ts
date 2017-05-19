import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../model/movie';
import { MovieService } from './movie.service';

@Component({
	selector: 'movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
	
  /* array of type movie class */
	Movies: Movie[];

	constructor(
    	private movieService: MovieService, 
    	private route: ActivatedRoute,
    	private location: Location
  ) {}

	ngOnInit(): void {
    /* extracting the movieName from params and passing it getMovies() method 
    of MovieService class */
    this.route.params
      .switchMap((params: Params) => this.movieService.getMovies(params['movieName']))
      .subscribe(movies => this.Movies = movies);
  }
}