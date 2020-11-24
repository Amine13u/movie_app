import React, { Fragment, useState } from "react";

const AddMovie = ({moviesList, handleAddMovie}) => {

    const [add, setAdd] = useState(false);
    const [newMovie, setnewMovie] = useState({});

    const handleAdd = () => setAdd(!add);

    const handleInput = (event)=> setnewMovie({...newMovie , [event.target.id] : event.target.value })


    const handleAddMovies = () => {
        handleAddMovie([...moviesList, newMovie]);
    }

    // const addMovie   

    return (
        <Fragment>
            <button onClick={handleAdd}>Add movie</button>
            {add && (<div className="add-form">
                        <label>Title :</label>
                        <input onChange={handleInput} type="text" id="title"/>
                        <label>Description :</label>
                        <input onChange={handleInput} type="text" id="description"/>
                        <label>Image :</label>
                        <input onChange={handleInput} type="text" id="posterUrl"/>
                        <label>Rating :</label>
                        <input onChange={handleInput} type="number" id="rate"/>
                        <button onClick={handleAddMovies}>Submit</button>
                    </div>               
            )}
        </Fragment>
    );
}

export default AddMovie;