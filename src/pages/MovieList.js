import React, { useState, useEffect } from 'react';


function MovieList(props) {

    let myMovies = props.movies;
    //let delMovie = props.deleteMovie;


    return (
        <div className="movieBlockContainer">
            {myMovies.map((movie) => (
                <div key={movie.id} className="movieBlock">
                    <h1>{movie.title}</h1>
                    <img src={movie.image}/>
                    <h5>Released: {movie.date}</h5>
                    <p>{movie.actors}</p>
                    <p>{movie.rating}</p>

                    <button onClick={() => {
                        props.deleteMovie(movie.id);
                    }}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default MovieList;
