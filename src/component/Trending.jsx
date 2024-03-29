import axios from "../utils/Axios";
import { useEffect, useState } from "react";
import Dropdown from "../template/Dropdown";
import { useNavigate } from "react-router-dom";
import TopNav from "../template/TopNav";
import Loading from "./Loading";
import Card from "../template/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [movietrending, setmovietrending] = useState([]);

  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const navigate = useNavigate();
  document.title="MOVIEHUB | TRENDING"

  const gettrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        setmovietrending((prevdata) => [...prevdata, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const refresh = () => {
    if (movietrending === 0) {
      gettrending();
    } else {
      setpage(1);
      setmovietrending([]);
      gettrending();
    }
  };

  useEffect(() => {
    refresh();
  }, [category, duration]);

  return movietrending.length ? (
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
              Trending
            </h1>
          </div>

          <TopNav />

          <div className="flex items-center">
            <Dropdown
              title="Category"
              option={["movie", "tv", "all"]}
              func={(e) => {
                setcategory(e.target.value);
              }}
            />
            <Dropdown
              title="Duration"
              option={["week", "day"]}
              func={(e) => {
                setduration(e.target.value);
              }}
            />
          </div>
        </div>

        <InfiniteScroll
          dataLength={movietrending.length}
          next={gettrending}
          hasMore={hasmore}
          loader={<h4>Loading...</h4>}
        >
          <Card data={movietrending} isClickable={false} />
        </InfiniteScroll>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Trending;
