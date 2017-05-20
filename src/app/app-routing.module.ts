import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from './movie/movie-details.component';
import { SearchBarComponent } from './search/search-bar.component';

const routes: Routes = [
	/* adding path to MovieDetailsComponent */
	{ path: '', redirectTo: '/searchBar', pathMatch: 'full' },
	{ path: 'searchBar', component: SearchBarComponent },
	{ path: 'pathUrl/:movieName', component: MovieDetailsComponent },
	
 ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],

})

export class AppRoutingModule{

}