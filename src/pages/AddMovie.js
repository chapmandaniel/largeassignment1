import React, { useState, useEffect } from 'react';

function AddMovie(props){

    let newMovie = {
        "id": "",
        "title": "",
        "date": "",
        "actors": "",
        "image": "",
        "rating": ""
    }

    const [addMovie, setAddMovie] = useState(newMovie);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setAddMovie(newMovie);
        props.movies.push(addMovie);
    };


    return(
        <div>
            {isSubmitted ? <h1>Movie Added</h1> : null}
            {isSubmitted ? null : <div>
            <h2>Add A Movie Rating</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" id="title" onChange={(event) => newMovie.title = event.target.value} />

                <label>Date</label>
                <input type="date" id="date"  onChange={(event) => newMovie.date = event.target.value} />

                <label>Actors</label>
                <input type="text" id="actors" onChange={(event) => newMovie.actors = event.target.value} />

                <label>Image</label>
                <input type="url" id="image" onChange={(event) => newMovie.image = event.target.value} />

                <label>Rating</label>
                <input type="number" id="rating" onChange={(event) => newMovie.rating = event.target.value} />

                <button type="submit">Submit</button>
            </form></div>}
        </div>

    );
}

export default AddMovie;


// <button onClick={() => {
//     props.movies.push(testMovie);
// }
// }>ADD REVIEW</button>