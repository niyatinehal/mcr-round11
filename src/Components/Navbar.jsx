import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between bg-slate-900 text-white py-4">
      <div className="pl-7" style={{paddingLeft:"25px"}}>IMDB</div>

      {/*search input*/}
      <div className="some">
        <input
          type="text"
          value="search here"
          className="border border-solid border-slate-400 px-2 rounded"
        />
      </div>

      <div style={{paddingRight:"25px"}} className="flex flex-row ">
        {/*navitems */}
        <NavLink to="/movies"><p className=" px-2 py-1 text-white " style={{padding:"0 10px "}}>Movies {" "}</p></NavLink>
        <NavLink to="/watch-list"><p style={{padding:"0 10px "}}>watch list{" "}</p></NavLink>
        <NavLink to="/starred-movies"><p style={{padding:"0 10px "}}>Starred Movies {" "}</p></NavLink>
      </div>
    </div>
  );
};
