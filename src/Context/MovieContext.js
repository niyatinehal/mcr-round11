import { createContext, useContext, useEffect, useState } from "react";

import { movies } from "../Database/db";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movieList, setMovieList] = useState(movies);
  const [starredMovies, setStarredMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedReleaseYear, setSelectedReleaseYear] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [newMovie, setNewMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isStarred, setIsStarred] = useState(false);

  useEffect(() => {
    const storedStarredMovies =
      JSON.parse(localStorage.getItem("starredMovies")) || [];
    setStarredMovies(storedStarredMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem("starredMovies", JSON.stringify(starredMovies));
  }, [starredMovies]);

  return (
    <MovieContext.Provider
      value={{
        movieList,
        setMovieList,
        starredMovies,
        setStarredMovies,
        watchlist,
        setWatchlist,
        selectedGenre,
        setSelectedGenre,
        selectedReleaseYear,
        setSelectedReleaseYear,
        selectedRating,
        setSelectedRating,
        newMovie,
        setNewMovie,
        searchQuery,
        setSearchQuery,
        isStarred,
        setIsStarred,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

const useMovie = () => useContext(MovieContext);

export { MovieProvider, useMovie };
