import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import noimg from "../../public/noimg.jpg";

const Horizantalcard = ({
  data,
  func,
  type,
  title,
  ismoviedetailpage,
  isseason,
  isclick,
}) => {
  return (
    <div>
      <div className="flex justify-between mr-20">
        <h1 className="p-3 text-3xl text-white font-semibold modtext">
          {title}
        </h1>

        {!ismoviedetailpage && (
          <Dropdown
            title="Category"
            option={["movie", "tv", "all"]}
            func={func}
          />
        )}
      </div>

      <div className="flex gap-3 overflow-x-auto ml-2">
        {data &&
          data.map((cv, ind) => {
            return (
              <div
                key={ind}
                className="bg-zinc-900 max-w-[20%] min-w-[20%] p-1 overflow-hidden leading-tight text-white text-md "
              >
                {isclick ? (
                  <>
                    <Link
                      to={`/${
                        cv.media_type === "movie" ? "movie" : "tvshow"
                      }/detail/${cv.id}`}
                    >
                      {cv.poster_path !== null || cv.backdrop_path !== null ? (
                        <img
                          src={`https://image.tmdb.org/t/p/original${
                            cv.poster_path || cv.backdrop_path
                          }`}
                          className="w-[100vh] h-[25vh]"
                        />
                      ) : (
                        <img
                          src={noimg}
                          className="w-[100vh] h-[25vh]"
                          alt="Default Image"
                        />
                      )}
                      <h1 className="font-semibold text-2xl mb-2 ml-2 leading-tight mt-2">
                        {cv.title ||
                          cv.original_title ||
                          cv.name ||
                          cv.original_name}
                      </h1>

                      {isseason && (
                        <p className="w-[80%] ml-2">
                          {cv?.overview?.slice(0, 10)}...
                          <span className="text-zinc-400 ">more</span>
                        </p>
                      )}
                    </Link>
                  </>
                ) : (
                  <Link>
                    {cv.backdrop_path !== null || cv.poster_path !== null ? (
                      <img
                        src={`https://image.tmdb.org/t/p/original${
                          cv.backdrop_path || cv.poster_path
                        }`}
                        className="w-[100vh] h-[25vh]"
                      />
                    ) : (
                      <img
                        src={noimg}
                        className="w-[100vh] h-[25vh]"
                        alt="Default Image"
                      />
                    )}
                    <h1 className="font-semibold text-2xl mb-2 ml-2 leading-tight mt-2">
                      {cv.title ||
                        cv.original_title ||
                        cv.name ||
                        cv.original_name}
                    </h1>

                    {isseason && (
                      <p className="w-[80%] ml-2">
                        {cv?.overview?.slice(0, 70)}...
                        <span className="text-zinc-400 ">more</span>
                      </p>
                    )}
                  </Link>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Horizantalcard;
