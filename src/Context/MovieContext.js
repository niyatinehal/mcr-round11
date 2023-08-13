import { createContext, useContext, useState } from "react";

import { movies } from "../Database/db";



const MovieContext=createContext();

const MovieProvider=({children})=>{

    const[movieList,setMovieList]=useState(movies)

    return(
        <MovieContext.Provider value={{movieList,setMovieList}}>
            {children}
        </MovieContext.Provider>
    )
}

const useMovie=()=>useContext(MovieContext);

export {MovieProvider,useMovie};