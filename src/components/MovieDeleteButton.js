import './MovieDeleteButton.css'

const MovieDeleteButton = ({ deleteMovie }) => {
  return <button className='movie-delete-button' onClick={deleteMovie}>Vymazat film</button>;
};

export default MovieDeleteButton
