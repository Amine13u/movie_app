import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({moviesList}) => {

    return (
        <div className="movies-list">
            {moviesList.map((el, i) => <MovieCard key={i} 
                                                title={el.title} 
                                                description={el.description} 
                                                posterUrl={el.posterUrl}
                                                rate={el.rate} />)}
            
        </div>
    );   
}

export default MovieList;