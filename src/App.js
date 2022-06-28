import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import AllMoviesPage from './pages/AllMovies';
import SingleMoviePage from './pages/SingleMovie';

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [movieClicked, setMovieClicked] = useState([]);

  function getMovieClickedData(movie) {
    console.log(movie);
    setMovieClicked(movie);
  }

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const movies = [];
        for (let i = 0; i < 5; i++) {
          movies.push(data[i]);
        }
        setMoviesData(movies);
      });
  }, []);

  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route
            path='/react-movie-app/'
            element={
              <AllMoviesPage
                getMovieClickedData={getMovieClickedData}
                movies={moviesData}
              />
            }
          />
          <Route
            path='/movie-id/*'
            element={<SingleMoviePage movie={movieClicked} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
