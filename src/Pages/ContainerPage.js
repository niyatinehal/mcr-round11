import React from "react";
import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export const ContainerPage = () => {
  return (
    <div>
      <div >
        <Navbar />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};
