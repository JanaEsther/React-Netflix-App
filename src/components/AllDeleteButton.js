import './AllDeleteButton.css';

const AllDeleteButton = ({ deleteMovies }) => {
  return <button className='main-delete-button' onClick={deleteMovies}>Vymazat vše</button>;
};

export default AllDeleteButton
