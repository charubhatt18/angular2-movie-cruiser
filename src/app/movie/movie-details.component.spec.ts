import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By }              					        from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA }   from '@angular/core';

import { Movie } from '../model/movie';
import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent (templateUrl)', () => {

  let comp:    MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

   let expectedMovie;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ],   // declare the test component
      schemas:      [ NO_ERRORS_SCHEMA ]        // to ignore unrecognized[angular-material] elements and attributes
    })
    .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    comp = fixture.componentInstance; // AppComponent test instance

    expectedMovie = new Movie('Titanic','tt0120338',1997,'movie','https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
    
    comp.Movies[0] = expectedMovie;
    fixture.detectChanges();
  });

  it('should display movie title', () => {
  	de = fixture.debugElement.query(By.css('md-card-title'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(expectedMovie.Title);
  });

  it('should display movie imdbID', () => {
  	de = fixture.debugElement.query(By.css('md-card-subtitle'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(expectedMovie.imdbID);
  });

  it('should display movie poster', () => {
  	de = fixture.debugElement.query(By.css('img'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.getAttribute('src')).toEqual(expectedMovie.Poster);
  });

  it('should display movie year', () => {
  	de = fixture.debugElement.query(By.css('md-card-subtitle'));
    el = de.nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain(expectedMovie.Year);
  });
  
});
