import React, { Fragment, useState } from "react";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Trailer from "./components/Trailer";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const [listOfMovies, setListOfMovies] = useState([
    {
      id: Math.random(),
      title: "Jigsaw",
      description: "Thriller, Crime, Mystery, Horror",
      posterUrl: "/images/Jigsaw.jpg",
      rate: 5.8,
      trailer: (
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/vPP6aIw1vgY"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: Math.random(),
      title: "The Platform",
      description: "Thriller, Sci-Fi, Horror",
      posterUrl: "/images/Platform.jpg",
      rate: 7,
      trailer: (
        <iframe
          width="836"
          height="441"
          src="https://www.youtube.com/embed/RlfooqeZcdY"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: Math.random(),
      title: "Attack on Titan",
      description: "Drama, Animation, Adventure, Action, Fantasy, Horror",
      posterUrl: "/images/AOT.jpg",
      rate: 8.8,
      trailer: (
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/9hHHnmt8mPQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      id: Math.random(),
      title: "Breaking Bad",
      description: "Drama, Thriller, Crime",
      posterUrl: "/images/Breaking Bad.jpg",
      rate: 9.5,
      trailer: (
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/HhesaQXLuRY"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
  ]);

  return (
    <Fragment>
      <Switch>
        <Route
          exact
          path={"/trailer/:title"}
          render={(props) => <Trailer moviesList={listOfMovies} {...props} />}
        />
      </Switch>

      <AddMovie moviesList={listOfMovies} handleAddMovie={setListOfMovies} />
      <MovieList moviesList={listOfMovies} />
      <Filter moviesList={listOfMovies} />
    </Fragment>
  );
}

export default App;
