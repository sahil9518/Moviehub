import axios from "../utils/Axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../template/TopNav";
import Loading from "./Loading";
import Card from "../template/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  

  const [person, setperson] = useState([]);

  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const navigate = useNavigate();
  document.title = "MOVIEHUB | PERSON";

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);

      if (data.results.length > 0) {
        setperson((prevdata) => [...prevdata, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const refresh = () => {
    if (person === 0) {
      getPerson();
    } else {
      setpage(1);
      setperson([]);
      getPerson();
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return person.length ? (
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
              Persons
            </h1>
          </div>

          <TopNav />

          <div className="flex items-center"></div>
        </div>

        <InfiniteScroll
          dataLength={person.length}
          next={getPerson}
          hasMore={hasmore}
          loader={<h4>Loading...</h4>}
        >
          <Card data={person} title={"people"}  isClickable={true}/>
        </InfiniteScroll>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default People;
