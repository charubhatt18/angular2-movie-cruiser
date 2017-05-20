import { Movie } from './movie';

/*Test for Movie model
Update test code to instansiate new Movie in beforEach() block*/

describe('Movie', () => {

  let movie;

  beforeEach(() => {
    movie = new Movie('Titanic','tt0120338',1997,'movie','https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
  });
 
  it('has title', () => {
    expect(movie.Title).toBe('Titanic');
  });

  it('has imdb Id', () => {
    expect(movie.imdbID).toBe('tt0120338');
  });

  it('has poster', () => {
    expect(movie.Poster).toBe('https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
  });

  it('has year', () => {
    expect(movie.Year).toBe(1997);
  });

  it('can clone itself', () => {
    const clone = movie.clone();
    expect(movie).toEqual(clone);
  });

});