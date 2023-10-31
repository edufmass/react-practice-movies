import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';

function App() {

  

  return (
    <PageWrapper>
      <Movie
          movieImg="images/uploads/mv1.jpg"
          movieTitle="Oblivion"
          movieYear="2012"
          movieRate="8.1"
          movieDuration="2h 21min"
          movieMMPA="PG-13"
          movieRelease="1 May 2015"
          movieDirector="Josh Whedon"
          movieStars="Robert Downey Jr., Chris Evans, Chris Hemsworth"
          >
            Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...        
        </Movie>
    </PageWrapper>        
  );
}

export default App;
