import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Trailer = () => {
  const { pathname } = useLocation();
  const locator = pathname.includes("movie") ? "movie" : "tvshow";
  const ytvideo = useSelector((state) => state[locator].info.videos);
  const Navigate = useNavigate();
  console.log("yt-->", ytvideo);

  const officialTrailer = ytvideo?.find((video) => video.type === "Trailer");
  console.log("trailer-->", officialTrailer);
  return (
    <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.8)] z-[100] flex justify-center items-center">
      <i
        onClick={() => {
          Navigate(-1);
        }}
        className="ri-close-large-line text-2xl modtext md:text-3xl text-white font-semibold  hover:text-[#6556CD] absolute top-[220px] right-40"
      ></i>
      {officialTrailer ? (
        <ReactPlayer
         controls
          width="70%"
          height="100vh"
          url={`https://www.youtube.com/watch?v=${officialTrailer.key}`}
        />
      ) : (
        <p className="text-white text-3xl modtext font-bold">
          Official trailer not available
        </p>
      )}
    </div>
  );
};

export default Trailer;
