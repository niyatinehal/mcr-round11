import React from "react";
import { useMovie } from "../Context/MovieContext";
import { MovieCard } from "../Components/MovieCard";

export const MovieListingPage = () => {
  const { movieList } = useMovie();
  return (
    <div>
      <h1>Movie Listing Page</h1>
      <div className="flex flex-wrap">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
