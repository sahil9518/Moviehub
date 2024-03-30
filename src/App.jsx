import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Trending from "./component/Trending";
import Popular from "./component/Popular";
import Movies from "./component/Movies";
import Tvshow from "./component/Tvshow";
import People from "./component/People";
import Moviedetail from "./component/Moviedetail";
import Tvdetail from "./component/Tvdetail";
import Peopledetail from "./component/Peopledetail";
import Trailer from "./template/Trailer";
import NotFound from "./template/NotFound";

function App() {
  return (
    <>
      <div className="bg-[#1F1E24] w-full flex">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
          <Route path="/tvshow" element={<Tvshow />}></Route>
          <Route path="/tvshow/detail/:id" element={<Tvdetail />}>
            <Route path="/tvshow/detail/:id/trailer" element={<Trailer />}></Route>
          </Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movie/detail/:id" element={<Moviedetail />}>
            <Route
              path="/movie/detail/:id/trailer"
              element={<Trailer />}
            ></Route>
          </Route>
          <Route path="/people/detail/:id" element={<Peopledetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
