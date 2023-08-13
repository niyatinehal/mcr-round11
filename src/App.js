import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ContainerPage } from "./Pages/ContainerPage";
import { MovieListingPage } from "./Pages/MovieListingPage";
import { MovieDetailsPage } from "./Pages/MovieDetailsPage";
import { StarredPage } from "./Pages/StarredPage";
import { WatchListPage } from "./Pages/WatchListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ContainerPage />}>
          <Route path="/" element={<MovieListingPage />} />
          <Route path="/movies" element={<MovieListingPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
          <Route path="/starred-page" element={<StarredPage />} />
          <Route path='/watch-list' element={<WatchListPage/>}/> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
