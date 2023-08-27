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
        <h1>DETAILS</h1>
        <h1>{movieDetails.title}</h1>
        <img src={movieDetails.poster} alt={movieDetails.title}/>
        <p>{movieDetails.description}</p>
        {movieDetails.genres.map(genre => (
            <span key={genre}>{genre}</span>
        ))} 
    </div>
);

        }
export default Details