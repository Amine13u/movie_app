import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ moviesList }) => {
  if (moviesList.length === 0) {
    return (
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "lightblue",
          padding: 10,
          height: 60,
        }}
      >
        <h2>No movie matched</h2>
      </div>
    );
  } else {
    return (
      <div className="movies-list">
        {moviesList.map((el, i) => (
          <MovieCard
            key={i}
            title={el.title}
            description={el.description}
            posterUrl={el.posterUrl}
            rate={el.rate}
          />
        ))}
      </div>
    );
  }
};

export default MovieList;
