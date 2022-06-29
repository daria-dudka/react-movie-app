import classes from './SingleMovie.module.css';
import BtnMain from './../BtnMain/BtnMain';

function SingleMovie(props) {
  return (
    <div className={classes.singlemovie}>
      <img
        className={classes.image}
        src={props.movie.moviebanner}
        alt={props.movie.title}
      />
      <h3 className={classes.title}>{props.movie.title}</h3>
      <p className={classes.text}>Director: {props.movie.director}</p>
      <p className={classes.text}>Release date: {props.movie.releasedate}</p>
      <BtnMain text='Back' path='/react-movie-app/' />
    </div>
  );
}

export default SingleMovie;
