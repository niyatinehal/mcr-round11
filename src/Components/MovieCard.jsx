import React from "react";

export const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-row p-3 m-2 justify-between bg-slate-300 h-auto cursor-pointer my-4  border mb-4">
      <div className="flex flex-col ">
        <img src={movie.imageURL} className="w-40 h-40" />
        <h2>{movie.title}</h2>
      </div>
    </div>
  );
};
