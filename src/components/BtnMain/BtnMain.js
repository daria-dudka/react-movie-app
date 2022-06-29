import classes from './BtnMain.module.css';
import { Link } from 'react-router-dom';

function BtnMain(props) {
  return (
    <Link
      onClick={props.movieClickedHandler}
      className={classes.btn}
      to={props.path}
    >
      {props.text}
    </Link>
  );
}

export default BtnMain;
