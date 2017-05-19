import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService{
	/* fixed part of the url */
	private moviesUrl = 'http://www.omdbapi.com/?s=';

	constructor(private http: Http){}

	getMovies(movieName: string){

		/* Movie url to be sent as http request */ 
		const url = `${this.moviesUrl}${movieName}`;
		/* sending the http request to the web-api using get method and subscribing the response*/
		return this.http.get(url).map(response => response.json().Search || [])

	}

}