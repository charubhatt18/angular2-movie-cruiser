import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from './movie/movie-details.component';

const routes: Routes = [
	/* adding path to MovieDetailsComponent */
  { path: 'pathUrl/:movieName', component: MovieDetailsComponent }
 ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],

})

export class AppRoutingModule{

}