import React, { useState } from "react";
import MovieList from './MovieList';

const Filter = ({moviesList}) => {

    const [movieTitle, setTitle] = useState("");
    const [rate, setRate] = useState(0);
    const [movieByTitle, setMovieByTitle] = useState();
    const [movieByRate, setMovieByRate] = useState();

    const handleChangeTitle = (e) => setTitle(e.target.value);
    const handleChangeRate = (e) => setRate(e.target.value);

    const handleFilterTitle = () => {
        setMovieByTitle(moviesList.filter(el => el.title === movieTitle))
    }

    const handleFilterRate = () => {
        setMovieByRate(moviesList.filter(el => Number(el.rate) === Number(rate)))
    }

    return (
        <div className="filters">
            <input onChange={handleChangeTitle} type="text"/>
            <button onClick={handleFilterTitle}>Search By Title</button>
            {movieByTitle && <MovieList moviesList={movieByTitle} />}
            <input onChange={handleChangeRate} type="number"/>
            <button onClick={handleFilterRate}>Search By Rate</button>
            {movieByRate && <MovieList moviesList={movieByRate} />}
        </div>
    );
}

export default Filter;