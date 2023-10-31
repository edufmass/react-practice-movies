import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import movieListJson from './movies.json';

function App() {

  let movieList = movieListJson;

  return (
    <PageWrapper>

      {/* without { } the first element is returned, with { } return is needed */}
      {movieList.map(movie => 
          <Movie
          movieImg={movie.img}
          movieTitle={movie.title}
          movieYear={movie.year}
          movieRate={movie.rate}
          movieDuration={movie.duration}
          movieMMPA={movie.mmpa}
          movieRelease={movie.release}
          movieDirector={movie.director}
          movieStars={movie.stars}
          >
            {movie.description}            
        </Movie>
      )}
      
    </PageWrapper>        
  );
}

export default App;
