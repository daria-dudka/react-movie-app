import SingleMovie from '../components/SingleMovie/SingleMovie';

function SingleMoviePage(props) {
  return (
    <section>
      <SingleMovie movie={props.movie} />
    </section>
  );
}

export default SingleMoviePage;
