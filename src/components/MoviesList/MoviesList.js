import classes from './MoviesList.module.css';
import MovieItem from './MovieItem/MovieItem';

function MoviesList(props) {
  return (
    <ul className={classes.list}>
      {props.movies.map((movie) => (
        <MovieItem
          getMovieClickedData={props.getMovieClickedData}
          key={movie.id}
          id={movie.id}
          image={movie.image}
          title={movie.title}
          description={movie.description}
          director={movie.director}
          moviebanner={movie['movie_banner']}
          releasedate={movie['release_date']}
        />
      ))}
    </ul>
  );
}

export default MoviesList;
