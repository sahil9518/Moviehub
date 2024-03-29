import axios from "../utils/Axios";
import { useEffect, useState } from "react";
import Dropdown from "../template/Dropdown";
import { useNavigate } from "react-router-dom";
import TopNav from "../template/TopNav";
import Loading from "./Loading";
import Card from "../template/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshow = () => {
  const [category, setcategory] = useState("airing_today");

  const [tv, settv] = useState([]);

  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const navigate = useNavigate();
  document.title = "MOVIEHUB | TV";

  const gettv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      console.log("dataa-->", data);
      if (data.results.length > 0) {
        settv((prevdata) => [...prevdata, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const refresh = () => {
    if (tv === 0) {
      gettv();
    } else {
      setpage(1);
      settv([]);
      gettv();
    }
  };

  useEffect(() => {
    refresh();
  }, [category]);

  return tv.length ? (
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
              TvShow
            </h1>
          </div>

          <TopNav />

          <div className="flex items-center">
            <Dropdown
              title="Category"
              option={["top_rated", "popular", "on_the_air", "airing_today"]}
              func={(e) => {
                setcategory(e.target.value);
              }}
            />
          </div>
        </div>

        <InfiniteScroll
          dataLength={tv.length}
          next={gettv}
          hasMore={hasmore}
          loader={<h4>Loading...</h4>}
        >
          <Card data={tv} title={"tvshow"} isClickable={true} />
        </InfiniteScroll>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Tvshow;
