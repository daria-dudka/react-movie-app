import MoviesList from './../components/MoviesList/MoviesList';

function AllMoviesPage(props) {
  return (
    <section>
      <MoviesList
        getMovieClickedData={props.getMovieClickedData}
        movies={props.movies}
      />
    </section>
  );
}

export default AllMoviesPage;
