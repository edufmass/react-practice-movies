import { useEffect, useState } from 'react';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import movieListJson from './movies.json';
import Pagination from './Pagination';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const ITEMS_PER_PAGE = 3;

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    let url = 'api/movies.json';
    let response = await fetch(url, {
      "method": "GET",
      "mode": "no-cors",
      "headers": {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
    });
    let jsonResponse = await response.json();
    setMovieList(jsonResponse);
  }


  const getMoviesPerPage = () => {
    return movieList.slice(
      (currentPage-1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }

  const getTotalPages = () => {
    let moviesTotal = movieListJson.length;
    return Math.ceil(moviesTotal / ITEMS_PER_PAGE);
  }

  return (
    <PageWrapper>

      {/* without { } the first element is returned, with { } return is needed */}
      {getMoviesPerPage().map(movie => 
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
      )};

      <Pagination
        current={currentPage}
        total={getTotalPages()}
        pageChange={(page) => {
          setCurrentPage(page);
        }}
       />
      
    </PageWrapper>
  );
}

export default App;
