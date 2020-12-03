import React from "react";

const Trailer = ({ match, moviesList }) => {
  let movie = moviesList.find((el) => el.title === match.params.title);
  return <div>{movie.trailer}</div>;
};

export default Trailer;
