import React, { Fragment, useState } from "react";
import './App.css';
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {

  const [listOfMovies, setListOfMovies] = useState([{title: 'Jigsaw', description: 'Thriller, Crime, Mystery, Horror', posterUrl: '/images/Jigsaw.jpg', rate:5.8},
                                                    {title: 'The Platform', description: 'Thriller, Sci-Fi, Horror', posterUrl: '/images/Platform.jpg', rate:7},
                                                    {title: 'Attack on Titan', description: 'Drama, Animation, Adventure, Action, Fantasy, Horror', posterUrl: '/images/AOT.jpg', rate:8.8},
                                                    {title: 'Breaking Bad', description: 'Drama, Thriller, Crime', posterUrl: '/images/Breaking Bad.jpg', rate:9.5}]);

  return (
    <Fragment>
      <AddMovie moviesList={listOfMovies} handleAddMovie={setListOfMovies} />
      <MovieList moviesList={listOfMovies} />
      <Filter moviesList={listOfMovies} />
    </Fragment>
    
  );
}

export default App;