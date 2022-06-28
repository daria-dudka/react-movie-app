import { Link } from 'react-router-dom';
import classes from './MovieItem.module.css';

function MovieItem(props) {
  function movieClickedHandler() {
    const movieClicked = props;
    props.getMovieClickedData(movieClicked);
  }

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3 className='title'>{props.title}</h3>
        <p className={classes.text}>{props.description}</p>
        <Link
          onClick={movieClickedHandler}
          className='btn'
          to={`/movie-id/${props.id}`}
        >
          See more
        </Link>
      </div>
    </li>
  );
}

export default MovieItem;
