import React, { Fragment, useState } from "react";

const AddMovie = ({ moviesList, handleAddMovie }) => {
  const [add, setAdd] = useState(false);
  const [newMovie, setnewMovie] = useState({});

  const handleAdd = () => setAdd(!add);

  const handleInput = (event) =>
    setnewMovie({ ...newMovie, [event.target.id]: event.target.value });

  const handleAddMovies = (e) => {
    e.preventDefault();
    handleAddMovie([...moviesList, newMovie]);
    setAdd(false);
  };

  // const addMovie

  return (
    <Fragment>
      <button onClick={handleAdd}>Add movie</button>
      {add && (
        <form onSubmit={handleAddMovies} className="add-form">
          <label>Title :</label>
          <input onChange={handleInput} type="text" id="title" required />
          <label>Description :</label>
          <input onChange={handleInput} type="text" id="description" required />
          <label>Image :</label>
          <input onChange={handleInput} type="url" id="posterUrl" required />
          <label>Rating :</label>
          <input
            onChange={handleInput}
            type="number"
            step={0.1}
            id="rate"
            required
          />
          <button>Submit</button>
        </form>
      )}
    </Fragment>
  );
};

export default AddMovie;
