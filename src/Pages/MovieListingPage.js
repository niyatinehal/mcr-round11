import React from "react";
import { useMovie } from "../Context/MovieContext";
import { MovieCard } from "../Components/MovieCard";
import { useParams } from "react-router-dom";

export const MovieListingPage = () => {
  const {
    movieList,
    setMovieList,
    selectedGenre,
    setSelectedGenre,
    selectedReleaseYear,
    setSelectedReleaseYear,
    selectedRating,
    setSelectedRating,
    searchQuery,
    setSearchQuery,
    isStarred,
    setIsStarred,
  } = useMovie();

  const filteredMovies = movieList.filter((movie) => {
    const isTitleMatch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const isCastMatch = movie.cast.some((actor) =>
      actor.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const isDirectorMatch = movie.director
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const isGenreMatch =
      selectedGenre === "All" || movie.genre.includes(selectedGenre);
    const isRatingMatch =
      selectedRating === "All" || movie.rating >= parseFloat(selectedRating);
    const isReleaseYearMatch =
      selectedReleaseYear === "All" ||
      movie.year === parseInt(selectedReleaseYear);

    return (
      (isTitleMatch || isCastMatch || isDirectorMatch) &&
      isGenreMatch &&
      isRatingMatch &&
      isReleaseYearMatch
    );
  });

 
  return (
    <div>
      <div className="flex flex-row justify-evenly items-center">
        <h1 className="text-left my-4 mx-4 font-bold text-xl">Movies</h1>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="border border-solid rounded-lg border-black"
        >
          <option value="All">All Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          {/* Add more genre options */}
        </select>

        <select
          value={selectedReleaseYear}
          onChange={(e) => setSelectedReleaseYear(e.target.value)}
          className="border border-solid rounded-lg border-black"
        >
          <option value="All">All Release Years</option>
          <option value="1994">1994</option>
          <option value="1999">1999</option>
          {/* Add more release year options */}
        </select>

        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="border border-solid rounded-lg border-black"
        >
          <option value="All">All Ratings</option>
          <option value="8">8+</option>
          <option value="9">9+</option>
          {/* Add more rating options */}
        </select>

        <button className="bg-black text-white px-4 border border-solid rounded-lg">
          Add Movies
        </button>
      </div>

      <div className="flex flex-wrap justify-around ">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
