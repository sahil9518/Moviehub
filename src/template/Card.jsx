import { Link } from "react-router-dom";
import noimg from "../../public/noimg.jpg";

const Card = ({ data, title, isClickable }) => {
  console.log("dataa-->", data);
  return (
    <>
      <div className="mt-3 grid  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {data.map((cv, ind) => (
          <div key={ind} className="relative">
            {isClickable ? (
              <Link to={`/${cv.media_type || title}/detail/${cv.id}`}>
                <img
                  src={
                    cv.profile_path || cv.backdrop_path || cv.poster_path
                      ? `https://image.tmdb.org/t/p/original${
                          cv.profile_path || cv.backdrop_path || cv.poster_path
                        }`
                      : noimg
                  }
                  className="w-full object-cover h-[30vh] sm:h-[40vh]  shadow-[8px_17px_38px_2px_black] rounded"
                />

                <h1 className="text-white text-xl lg:text-2xl font-semibold text-zinc-400">
                  {cv.name || cv.original_name || cv.title || cv.original_title}
                </h1>

                {cv.vote_average >= 0 && (
                  <div className="text-white bg-yellow-500 w-[9vh] h-[9vh] text-xs font-bold flex flex-col justify-top items-center rounded-full absolute right-[3%] top-[7px]">
                    <i className="ri-vip-crown-2-fill text-yellow-200 text-sm p-[0px] m-[0px]"></i>
                    <h6 className="font-xs font-black text-red-700">Rating</h6>
                    {cv.vote_average.toFixed(1)}/10
                  </div>
                )}
              </Link>
            ) : (
              <>
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    cv.profile_path || cv.backdrop_path || cv.poster_path
                  }`}
                  className="w-full object-cover h-[30vh] sm:h-[40vh]  shadow-[8px_17px_38px_2px_black] rounded"
                />
                <h1 className="text-white text-xl lg:text-2xl font-semibold text-zinc-400">
                  {cv.title || cv.original_title || cv.name || cv.original_name}
                </h1>

                {cv.vote_average >= 0 && (
                  <div className="text-white bg-yellow-500 w-[9vh] h-[9vh] text-xs font-bold flex flex-col justify-top items-center rounded-full absolute right-[3%] top-[7px]">
                    <i className="ri-vip-crown-2-fill text-yellow-200 text-sm p-[0px] m-[0px]"></i>
                    <h6 className="font-xs font-black text-red-700">Rating</h6>
                    {cv.vote_average.toFixed(1)}/10
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
