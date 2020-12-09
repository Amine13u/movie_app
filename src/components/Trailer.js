import React from "react";

const Trailer = ({ match, moviesList }) => {
  console.log({ match, moviesList });
  console.log("type of the id in the link is :", typeof match.params.id);
  let movie = moviesList.find((el) => el.id == match.params.id);
  return <div>{movie.trailer}</div>;
};

export default Trailer;
