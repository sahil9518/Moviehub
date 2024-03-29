import { Link } from "react-router-dom";

const Header = ({ wallpaper }) => {
  console.log("wall-->>", wallpaper);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            wallpaper?.backdrop_path || wallpaper?.poster_path
          })`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
        className="w-full h-[60vh] relative"
      >
        <div className="text-white absolute top-[38%] left-[5%]">
          <h1 className="text-5xl font-bold mb-3">
            {wallpaper?.original_title ||
              wallpaper?.title ||
              wallpaper?.original_name ||
              wallpaper?.name}
          </h1>

          <Link to={`/${wallpaper.media_type==="movie"? "movie" : "tvshow"}/detail/${wallpaper.id}`} className="w-[80%] text-2xl font-semibold">
            {wallpaper?.overview?.slice(0, 150)}...
            <span className="text-blue-500 font-bold">more</span>
          </Link>

          <p className="font-bold flex gap-3 mb-5">
            <i className="ri-megaphone-fill text-[yellow]"></i>{" "}
            {wallpaper?.first_air_date || wallpaper?.release_date}
            <i className="ri-record-circle-fill text-[yellow]"></i>{" "}
            {wallpaper?.media_type}
          </p>
          <Link
            to={`/${wallpaper.media_type==="movie"? "movie" : "tvshow"}/detail/${wallpaper.id}/trailer`}
            className="border-[4] bg-blue-600 p-2 rounded hover:bg-blue-700"
          >
            Watch Trailor
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
