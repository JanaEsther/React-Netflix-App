import './MovieReloadButton.css';

const MovieReloadButton = ({ reloadMovies }) => {
  return (
    <button className="movie-reload-button" onClick={reloadMovies}>
      Reload vše
    </button>
  );
};

export default MovieReloadButton;
