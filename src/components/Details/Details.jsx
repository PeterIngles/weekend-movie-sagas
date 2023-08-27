import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Details = () => {

const dispatch = useDispatch();
let { id } = useParams();
const movieDetails = useSelector(state => state.movieDetails);

useEffect(() => {
    console.log("ID for dispatch", id)
    dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: id });
}, [id, dispatch]);

console.log("MOVIE DETAILS", movieDetails)

return (
    <div>
        <header>
        <h1>MOVIE DETAILS</h1>
        <a href="/">Back to Movie List</a>
        </header>
  
  {movieDetails.map((movie, index) => (
    <div key={index}>
      {index === 0 && (
        <>
          <h1>{movie.title}</h1>
          <img src={movie.poster} alt={movie.title} />
          <p>{movie.description}</p>
        </>
      )}
      <span>{movie.genre}</span>
    </div>
  ))}
</div>
);

        }
export default Details