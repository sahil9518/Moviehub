import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { personasync } from "../store/actions/peopleasycn";
import Horizantalcard from "../template/Horizantalcard";
import Loading from "./Loading";
import { removepeople } from "../store/reducer/PeopleSlice";
import noimg from "../../public/noimg.jpg";

const Peopledetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);
  const Navigate = useNavigate();

  const movieCredits =
    info && info.movie_credits ? info.movie_credits.cast : [];
  const tvCredits = info && info.tv_credits ? info.tv_credits.cast : [];

  const category = [...movieCredits, ...tvCredits];

  console.log("cat-->", category);

  useEffect(() => {
    dispatch(personasync(id));
    return () => {
      dispatch(removepeople());
    };
  }, []);

  console.log("people-->", info);

  if (!info || !info.detail) {
    return <Loading />;
  }

  return (
    <>
      <div className="w-full px-[4%]">
        <div className="h-[10vh] flex items-center">
          <i
            onClick={() => {
              Navigate(-1);
            }}
            className="ri-arrow-left-line text-2xl modtext md:text-3xl text-white font-semibold  hover:text-[#6556CD]"
          ></i>
        </div>
        <div className="flex gap-10">
          <div className="w-[20%] text-white">
            {info.detail.profile_path !== null ? (
              <img
                className="w-[90%] rounded-2xl"
                src={`https://image.tmdb.org/t/p/original${info.detail.profile_path}`}
              ></img>
            ) : (
              <img src={noimg} className="w-[90%] rounded-2xl"></img>
            )}
            <hr className="mt-5 w-[90%] border-none h-[1px] bg-zinc-500" />
            <div className="text-2xl mt-2 flex justify-evenly w-[90%] text-zinc-400">
              <a
                href={`https://www.imdb.com/name/${
                  info.externalid.imdb_id == null
                }`}
                target="_blank"
              >
                <i className="ri-earth-fill hover:text-green-600 hover:text-3xl duration-300"></i>
              </a>

              <a
                href={`https://www.facebook.com/${info.externalid.facebook_id}/`}
                target="_blank"
              >
                <i className="ri-facebook-circle-fill hover:text-blue-600 hover:text-3xl duration-300"></i>
              </a>

              <a
                href={`https://www.instagram.com/${info.externalid.instagram_id}`}
                target="_blank"
              >
                <i className="ri-instagram-fill hover:text-pink-600 hover:text-3xl duration-300"></i>
              </a>
              <a
                href={`https://twitter.com/${info.externalid.twitter_id}`}
                target="_blank"
              >
                <i className="ri-twitter-x-fill hover:text-white hover:text-3xl duration-300"></i>
              </a>
            </div>
            <div className="w-[90%] text-center text-zinc-400">
              <h1 className="text-2xl font-black mt-2">Personal Info</h1>
              <h1 className="font-black mt-2 text-xl italic">Known for</h1>
              <h1 className="font-bold text-lg italic">
                {info.detail.known_for_department}
              </h1>
              <h1 className="mt-2 font-black text-xl italic">Gender</h1>
              <h1 className="font-bold text-lg italic">
                {info.detail.gender === 1 ? "Female" : "Male"}
              </h1>

              <h1 className="mt-2 font-black text-xl italic">Birthday</h1>
              <h1 className="font-bold text-lg italic">
                {info.detail.birthday == null
                  ? "Not define"
                  : info.detail.birthday}
              </h1>

              <h1 className="mt-2 font-black text-xl italic">Deathday</h1>
              <h1 className="font-bold text-lg italic">
                {info.detail.deathday == null
                  ? "Still alive"
                  : info.detail.birthday}
              </h1>

              <h1 className="mt-2 font-black text-xl italic">Place of Birth</h1>
              <h1 className="font-bold text-lg italic">
                {info.detail.place_of_birth == null
                  ? "Not define"
                  : info.detail.place_of_birth}
              </h1>
            </div>
          </div>

          <div className="w-[80%] text-white text-zinc-400">
            <div>
              <h1 className="text-5xl font-semibold">{info.detail.name}</h1>
            </div>
            <div>
              {info.detail.biography && (
                <>
                  <h1 className="text-xl mt-5 font-semibold">Biograpy</h1>
                  <p className="mt-2 font-semibold">{info.detail.biography}</p>
                </>
              )}
            </div>
            <div>
              {info.combined_credits.cast && (
                <>
                  <h1 className="mt-5 font-semibold text-xl">Known for</h1>
                  <Horizantalcard
                    data={info.combined_credits.cast}
                    isseason={true}
                    ismoviedetailpage={true}
                    isclick={true}
                  />
                </>
              )}
            </div>

            <h1 className="mt-5 font-semibold text-xl">Acting in Movies&Tv</h1>
            <div className="w-full h-[50vh] mt-5 shadow-xl border-2 border-zinc-700 p-5 shadow-[rgba(255,255,255,.3)] overflow-x-hidden overflow-y-auto">
              {category.map((c, i) => (
                <Link
                  to={`/${
                    movieCredits.includes(c) ? "movie" : "tvshow"
                  }/detail/${c.id}`}
                  className="hover:text-white duration-300 cursor-pointer h-[10vh] hover:bg-[#090809] flex items-center pl-4"
                  key={i}
                >
                  <span>
                    {c.title || c.original_title || c.name || c.original_name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Peopledetail;
