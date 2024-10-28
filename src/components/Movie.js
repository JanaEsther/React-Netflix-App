import { useState } from 'react'
import MovieDeleteButton from './MovieDeleteButton'
import AllDeleteButton from './AllDeleteButton'
import MovieReloadButton from './MovieReloadButton'
import data from '../data'
import './Movie.css'

const Movie = ()=>{
  const [movieList, setMovieList] = useState(data)

  const deleteOneMovie = (idecko)=>{
    const filteredMovies = movieList.filter((oneMovie) => {
      return oneMovie.id !== idecko;
    });
    setMovieList(filteredMovies);
  }
     

  const deleteAllMovies = () => {
    setMovieList([])
  }

  
  const reloadAllMovies = () => {
    setMovieList(data)
  }

  return (
    <section>
      <div className="all-movies">
        {movieList.map((oneMovie) => {
          const { id, image, title, age, tags, description } = oneMovie;

          return (
            <div className="one-movie" key={id}>
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
              <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)} />

            </div>
          );
        })
        }
      </div>
      <div>
        <AllDeleteButton deleteMovies={deleteAllMovies} />
        <MovieReloadButton reloadMovies={reloadAllMovies}/>
      </div>
    </section>
  );
}

export default Movie
