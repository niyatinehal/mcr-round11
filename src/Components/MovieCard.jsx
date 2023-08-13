import React from "react";
import { Link } from "react-router-dom";
import { useMovie } from "../Context/MovieContext";

export const MovieCard = ({ movie }) => {
  const { isStarred, setIsStarred, movieList, setMovieList } = useMovie();

  const toggleStarMark = (id) => {
    const updatedMovies = movieList.map((m) => {
      if (m.id === id) {
        return { ...m, isStarred: !m.isStarred };
      }
      return m;
    });
    setMovieList(updatedMovies);
  };

  return (
    <div className="flex flex-row p-3 m-2 justify-between bg-slate-300 h-auto w-60 cursor-pointer my-4  border mb-4 border-solid rounded-2xl">
      <div className="flex flex-col  ">
        <Link to={`/movies/${movie.id}`}>
          <img src={movie.imageURL} className="max-w-full block " />
          <h2 className="font-bold">{movie.title}</h2>
          <p className="text-center leading-4">{movie.summary}</p>
        </Link>
        <div className="flex flex-row justify-evenly">
          <button
            onClick={() => toggleStarMark(movie.id)}
            className="bg-slate-700 px-4 text-slate-300 m-2 border border-solid rounded text-xs font-bold"
          >
            {movie.isStarred ? "Starred" : "Star Mark"}
          </button>
          <button
            className="bg-slate-700 px-4 text-slate-300 m-2 border border-solid rounded text-xs font-bold
          "
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};
