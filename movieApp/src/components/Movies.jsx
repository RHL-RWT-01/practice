import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/Actions";
function Movies() {
  const movies = useSelector((state) => state.movies);
  const action = useDispatch();
  const handleClick=()=>{
    action(getMovies());
  }
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
