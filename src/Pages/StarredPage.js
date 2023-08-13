import React from "react";
import { useMovie } from "../Context/MovieContext";
import { MovieCard } from "../Components/MovieCard";

export const StarredPage = () => {
  const { movieList, setMovieList } = useMovie();
  const starredMovies = movieList.filter((movie) => movie.isStarred);
  const unstarMovie = (id) => {
    const updatedMovies = movieList.map((m) => {
      if (m.id === id) {
        return { ...m, isStarred: false };
      }
      return m;
    });
    setMovieList(updatedMovies);
  };
  console.log(starredMovies.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
          
        )))

  return (
    <div>
      <h1 className="text-left font-bold m-4 text-lg">Starred Page</h1>
      {starredMovies.length===0 ? (<p>no Starred Movies</p>):(<div>
        {starredMovies.map((movie)=>(
          <MovieCard key={movie.id} movie={movie}/>
          
        ))}
      </div>)}
    </div>
  );
};
