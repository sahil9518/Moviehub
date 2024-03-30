import axios from "../utils/Axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimg from "/noimg.jpg";

const TopNav = () => {
  //hooks area
  const [search, setSearch] = useState("");
  const [searchdone, setSearchdone] = useState([]);

  const getsearch = async () => {
    try {
      const d = await axios.get(`/search/multi?query=${search}`);
      setSearchdone(d.data.results);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getsearch();
  }, [search]);

  return (
    <>
      <div className="w-full h-[10vh] relative flex justify-center item-center mt-4">
        <div className="hidden sm:hidden lg:block">
          <i className="text-3xl text-zinc-400 ri-search-line mt-2"></i>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            type="text"
            placeholder="Search"
            className="md:w-[40%] lg:w-[80%] h-[5vh] border-none bg-transparent text-xl outline-none text-white mx-3 text-zinc-200 p-6"
          />
          {search.length > 0 && (
            <i
              onClick={() => {
                setSearch("");
              }}
              className="text-3xl text-zinc-400 ri-close-fill mt-2 absolute right-[21%]"
            ></i>
          )}

          <div className="z-[100] md:w-[80%] lg:w-[50%] xl:w-[40%] max-h-[50vh] absolute top-[100%] bg-zinc-300 overflow-auto ">
            {searchdone?.map((cv) => {
              return (
                <Link
                  to={`/${cv.media_type === 'movie' ? 'movie' : cv.media_type === 'tv' ? 'tvshow' : 'people'}/detail/${cv.id}`}
                  key={cv.id}
                  className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-zinc-600 inline-block  w-[100%] md:p-3  lg:p-10 flex justify-start item-center border-b-2 border-zinc-100"
                >
                  <img
                    className="w-[8vw] object-cover mr-5 rounded "
                    src={
                      cv.backdrop_path || cv.poster_path || cv.profile_path
                        ? `https://image.tmdb.org/t/p/original${
                            cv.backdrop_path ||
                            cv.poster_path ||
                            cv.profile_path
                          }`
                        : noimg
                    }
                  ></img>
                  <span>{cv.original_title || cv.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
