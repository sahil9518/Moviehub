
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
      <div className="w-[20%] border-r-2 border-zinc-400 p-3">
        <h1 className="text-white text-2xl font-bold">
          <i className="ri-tv-fill text-[#6556CD] mr-3  "></i>
          MOVIEHUB
        </h1>
        <nav className="text-white text-lg text-zinc-400 flex flex-col gap-3">
          <h1 className="text-xl font-semibold text-white mt-10 mb-5">New Feeds</h1>
          <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white hover:duration-150 p-3">
            <i className="ri-fire-fill mr-2"></i>
            Trending
          </Link>
          <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white hover:duration-150 p-3">
            <i className="mr-2 ri-bard-fill"></i>
            Popular
          </Link>
          <Link to="/movies" className="hover:bg-[#6556CD] hover:text-white hover:duration-150 p-3">
            <i className="mr-2 ri-movie-2-fill"></i>
            Movies
          </Link>
          <Link to="/tvshow" className="hover:bg-[#6556CD] hover:text-white hover:duration-150 p-3">
            <i className="mr-2 ri-tv-2-fill"></i>
            Tv Shows
          </Link>
          <Link to="/people" className="hover:bg-[#6556CD] hover:text-white hover:duration-150 p-3">
            <i className="mr-2 ri-team-fill"></i>
            People
          </Link>
        </nav>
        <hr className="mt-5 border-none h-[1px] bg-zinc-400" />
        <nav className="text-white text-lg text-zinc-400 flex flex-col gap-3">
          <h1 className="text-xl font-semibold text-white mt-5 mb-5">
            Movie Information
          </h1>
          <Link className="hover:bg-[#6556CD] hover:text-white hover:duration-150 p-3">
            <i className="mr-2 ri-information-2-fill"></i>
            About
          </Link>
          <Link className="hover:bg-[#6556CD] hover:text-white hover:duration-150 p-3">
            <i className="mr-2 ri-phone-fill"></i>
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
