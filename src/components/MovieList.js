import React, { useState, useEffect } from 'react';
import movieData from './movies.json';

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(movieData);
    }, []);

    return (
        <div className="movieBlockContainer">
            {movies.map((movie) => (
                <div className="movieBlock">
                    <h1>{movie.title}</h1>
                    <img src={movie.image}/>
                    <h5>Released: {movie.date}</h5>
                    <p>{movie.actors}</p>
                    <p>{movie.rating}</p>
                </div>
            ))}
        </div>
    );
}

export default MovieList;
