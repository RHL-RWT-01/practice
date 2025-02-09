import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/Actions";
function Movies() {
  const movies = useSelector((state) => state.movies);
  const action = useDispatch();
  const handleClick=()=>{
    action(getMovies());
  }
  const fetchMovies = async () => {
    const response = await fetch("http://localhost:3001/movies");
    const data = await response.json();
    action(getMovies(data));
  };
  return (
    <>
      <h1>Movies</h1>
      <button onClick={handleClick()}>Get</button>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <h2>{movie.name}</h2>
            <p>{movie.rating}</p>
            <p>{movie.duration}</p>
            <p>{movie.genre}</p>
            
          </div>
        );
      })}
    </>
  );
}

export default Movies;
