import './MoviesReloadButton.css';

const MovieReloadButton = ({ reloadMovies }) => {
  return (
    <button className="movies-reload-button" onClick={reloadMovies}>
      Načíst filmy
    </button>
  );
};

export default MovieReloadButton;
