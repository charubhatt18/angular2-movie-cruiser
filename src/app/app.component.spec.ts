import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA }    from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent (templateUrl)', () => {

  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ], // declare the test component
      schemas:      [ NO_ERRORS_SCHEMA ] // to ignore unrecognized[angular-material] elements and attributes
    })
    .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('Component is truthy', () => {
    fixture.detectChanges();
    expect(comp).toBeTruthy();
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(comp.title).toContain('Movie Cruiser');
  });

  it('title should be in h1 tag', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });
  
});
