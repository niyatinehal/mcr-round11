import React from "react";
import { useMovie } from "../Context/MovieContext";
import { useParams } from "react-router-dom";

export const MovieDetailsPage = () => {
  const { id } = useParams;
  const { movieList, setMovieList } = useMovie();
  const foundMovie = movieList.find((movie) => movie.id === parseInt(id));
  console.log( parseInt(id))
  if (!foundMovie) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const toggleStarMark = () => {
    const updatedMovies = movieList.map((m) => {
      if (m.id === movieList.id) {
        return { ...m, isStarred: !m.isStarred };
      }
      return m;
    });
    setMovieList(updatedMovies);
  };

  const addToWatchlist = () => {
    const updatedMovies = movieList.map((m) => {
      if (m.id === movieList.id) {
        return { ...m, addedToWatchlist: true };
      }
      return m;
    });
    setMovieList(updatedMovies);
  };
  return (
    <div>
      <h1>{foundMovie.title}</h1>
      <img src={foundMovie.imageURL} alt={foundMovie.title} />
      <p>{foundMovie.summary}</p>

      {/* Star Mark Button */}
      <button onClick={toggleStarMark}>
        {foundMovie.isStarred ? "Starred" : "Star Mark"}
      </button>

      {/* Add to Watchlist Button */}
      <button onClick={addToWatchlist}>
        {foundMovie.addedToWatchlist ? "Added to Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
};
