import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { movieasync } from "../store/actions/movieasycn";
import Loading from "./Loading";
import { removemovie } from "../store/reducer/MovieSlice";
import Horizantalcard from "../template/Horizantalcard";
import noimg from "../../public/noimg.jpg";

const Moviedetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  console.log("info-->", info);
  const Navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(movieasync(id));

    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info && info.detail ? (
    <div className="w-full min-h-[100vh] relative">
      <div
        className="absolute top-0 left-0 w-full h-full blur-[9px]"
        style={{
          background: `url(https://image.tmdb.org/t/p/original${info.detail.backdrop_path})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
      >
        {" "}
      </div>
      <div className="mx-[50px] relative z-10">
        <div className="flex gap-7 items-center h-[10vh] ">
          <i
            onClick={() => {
              Navigate(-1);
            }}
            className="ri-arrow-left-line text-2xl modtext md:text-3xl text-white font-semibold  hover:text-[#6556CD]"
          ></i>

          <Link to={"/"} className="text-white text-2xl font-bold">
            <i className="ri-tv-fill text-[#6556CD] mr-3  "></i>
            MOVIEHUB
          </Link>

          <a href={info.detail.homepage} target="_blank">
            <i className="ri-earth-fill text-xl hover:text-[#6556CD] modtext text-white "></i>
          </a>
          <a
            href={`https://www.imdb.com/title/${info.detail.imdb_id}/`}
            className="font-black text-black bg-[#E2B616] p-1 px-2 rounded border-2 border-black hover:bg-yellow-400"
            target="_blank"
          >
            IMDb
          </a>
        </div>

        <div className="flex mt-5">
          {info.detail.poster_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/original${info.detail.poster_path}`}
              className="w-[30%] h-[70vh] rounded-2xl ml-5"
            ></img>
          ) : (
            <img
              src={noimg}
              className="w-[22%] h-[70vh] rounded-2xl ml-5"
            ></img>
          )}

          <div className="ml-10 text-white w-full ">
            <div>
              <h1 className="text-5xl text-white modtext drop-shadow-md stroke-2 stroke-black font-black ">
                {info.detail.name ||
                  info.detail.original_name ||
                  info.detail.title ||
                  info.detail.original_title}
                <span className="text-xl ml-1 drop-shadow-md">
                  ({info.detail.release_date.split("-", 1)})
                </span>
              </h1>
            </div>

            <div className="mt-3 flex items-center gap-5">
              {info.detail.vote_average >= 0 && (
                <div className="text-white bg-yellow-500 w-[9vh] h-[9vh] text-xs font-bold flex flex-col justify-top items-center rounded-full drop-shadow-md">
                  <i className="ri-vip-crown-2-fill text-yellow-200 text-sm p-[0px] m-[0px]"></i>
                  <h6 className="font-xs font-black text-red-700">Rating</h6>
                  {info.detail.vote_average.toFixed(1)}/10
                </div>
              )}
              <h1 className="text-xl font-black drop-shadow-md modtext">
                {info.detail.release_date}
              </h1>
              <h1 className="modtext font-black text-lg text-white">
                {info.detail.genres.map((cv) => cv.name).join(", ")}
              </h1>
              <h1 className="modtext font-black text-lg">
                {info.detail.runtime}min
              </h1>
            </div>

            <div className="modtext mt-3 font-black text-lg mb-3 italic">
              {info.detail.tagline}
            </div>

            <div>
              <h1 className="mb-3 mod2text font-black text-2xl">Overview</h1>
              <p className="modtext font-black text-xl italic leading-6">
                {info.detail.overview.slice(0, 200)}
              </p>
            </div>

            <div>
              <h1 className="mod2text text-xl font-black mt-3 mb-3">
                Movie Translated
              </h1>
              <p className="modtext font-black text-xl italic leading-6">
                {info.translations.join(", ")}
              </p>
            </div>

            <div className="mt-8">
              <Link
                to={`${pathname}/trailer`}
                className="bg-[#6556CD] p-3 px-2 rounded hover:bg-[#3f28d4]"
              >
                <i className="ri-play-line mr-2"></i>
                Play Trailor
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-10">
            {info.watchprovider &&
              info.watchprovider.flatrate &&
              info.watchprovider.flatrate.length > 0 && (
                <div className="flex items-center gap-6 mt-10">
                  <h1 className="text-xl text-white modtext font-black ml-5">
                    Available on Plateform
                  </h1>
                  {info.watchprovider.flatrate.map((cv) => (
                    <div key={cv.id} className="ml-10">
                      <img
                        className="w-[8vh] h-[8vh]"
                        src={`https://image.tmdb.org/t/p/original${cv.logo_path}`}
                      />
                    </div>
                  ))}
                </div>
              )}
          </div>

          <div>
            {info.watchprovider &&
              info.watchprovider.rent &&
              info.watchprovider.rent.length > 0 && (
                <div className="flex items-center gap-6 mt-5">
                  <h1 className="text-xl text-white modtext font-black ml-5">
                    Available on Rent
                  </h1>
                  {info.watchprovider.rent.map((cv) => (
                    <div key={cv.id} className="ml-10">
                      <img
                        className="w-[8vh] h-[8vh]"
                        src={`https://image.tmdb.org/t/p/original${cv.logo_path}`}
                      />
                    </div>
                  ))}
                </div>
              )}
          </div>

          <div>
            {info.watchprovider &&
              info.watchprovider.buy &&
              info.watchprovider.buy.length > 0 && (
                <div className="flex items-center gap-6 mt-5">
                  <h1 className="text-xl text-white modtext font-black ml-5">
                    Available on Buy
                  </h1>
                  {info.watchprovider.buy.map((cv) => (
                    <div key={cv.id} className="ml-10">
                      <img
                        className="w-[8vh] h-[8vh]"
                        src={`https://image.tmdb.org/t/p/original${cv.logo_path}`}
                      />
                    </div>
                  ))}
                </div>
              )}
          </div>

          <hr className="mt-10 border-none h-[1.5px] bg-zinc-300" />

          <Horizantalcard
            data={
              info.recommendations.length > 0
                ? info.recommendations
                : info.similar
            }
            title={"Recommended"}
            ismoviedetailpage={true}
            type={"movie"}
            isseason={true}
            isclick={true}
          />
        </div>
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetail;
