import React from "react";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ title, description, posterUrl, rate }) => {
  return (
    <div className="movie-card">
      <img className="poster" src={posterUrl} alt={title} />
      <ReactStars
        count={10}
        size={36}
        edit={false}
        isHalf
        value={rate}
        activeColor="#ffd700"
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default MovieCard;
