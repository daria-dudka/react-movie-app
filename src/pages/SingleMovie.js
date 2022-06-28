import { Link } from 'react-router-dom';
import classes from './SingleMovie.module.css';

function SingleMoviePage(props) {
  return (
    <section>
      <div>
        <img
          className={classes.image}
          src={props.movie.moviebanner}
          alt={props.movie.title}
        />
        <h3 className='title'>{props.movie.title}</h3>
        <p>Director:{props.movie.director}</p>
        <p>Release date:{props.movie.releasedate}</p>
      </div>
      <Link className='btn single__btn' to='/react-movie-app/'>
        Back
      </Link>
    </section>
  );
}

export default SingleMoviePage;
