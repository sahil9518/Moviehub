import axios from "../utils/Axios";
import { useEffect, useState } from "react";
import Dropdown from "../template/Dropdown";
import { useNavigate } from "react-router-dom";
import TopNav from "../template/TopNav";
import Loading from "./Loading";
import Card from "../template/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
  const [category, setcategory] = useState("now_playing");

  const [movie, setmovie] = useState([]);

  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const navigate = useNavigate();
  document.title = "MOVIEHUB | MOVIES";

  const getpopular = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      console.log("dataa-->", data);

      if (data.results.length > 0) {
        setmovie((prevdata) => [...prevdata, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const refresh = () => {
    if (movie === 0) {
      getpopular();
    } else {
      setpage(1);
      setmovie([]);
      getpopular();
    }
  };

  useEffect(() => {
    refresh();
  }, [category]);

  return movie.length ? (
    <>
      <div className="w-full mx-14 mt-4 ">
        <div className="w-full h-[10vh] mb-7 flex justify-between">
          <div className="flex gap-4 items-center">
            <i
              onClick={() => {
                navigate(-1);
              }}
              className="ri-arrow-left-line text-2xl md:text-3xl text-white text-zinc-400 hover:text-[#6556CD]"
            ></i>
            <h1 className="text-2xl md:text-3xl font-semibold text-white text-zinc-400">
              Movies
            </h1>
          </div>

          <TopNav />

          <div className="flex items-center">
            <Dropdown
              title="Category"
              option={["popular", "top_rated", "upcoming", "now_playing"]}
              func={(e) => {
                setcategory(e.target.value);
              }}
            />
          </div>
        </div>

        <InfiniteScroll
          dataLength={movie.length}
          next={getpopular}
          hasMore={hasmore}
          loader={<h4>Loading...</h4>}
        >
          <Card data={movie} title={"movie"} isClickable={true}/>
        </InfiniteScroll>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Movies;
