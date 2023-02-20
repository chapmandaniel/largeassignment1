
function Movie({
                   movieTitle="Movie Title",
                   releaseDate= "Release Date",
                   actorList= "Actor List",
                   image= "Image",
                   rating= "Rating"}){
    return (
        <div>
            <h3>{movieTitle}</h3>
            <p>{releaseDate}</p>
            <p>{actorList}</p>
            <p>{image}</p>
            <p>{rating}</p>
        </div>
    );
}

export default Movie;