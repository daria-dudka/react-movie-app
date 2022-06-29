import BtnMain from '../../BtnMain/BtnMain';
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
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.text}>{props.description}</p>
        <BtnMain
          text='See more'
          movieClickedHandler={movieClickedHandler}
          path={`/movie-id/${props.title}`}
        />
      </div>
    </li>
  );
}

export default MovieItem;
