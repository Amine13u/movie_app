import React from "react";
import ReactStars from "react-rating-stars-component";

import { Link } from "react-router-dom";

const MovieCard = ({ title, description, posterUrl, rate }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/trailer/${title}`}>
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
        <h2 style={{ color: "black" }}>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
