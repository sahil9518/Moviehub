import Header from "../template/Header";
import Sidenav from "../template/Sidenav";
import Horizantalcard from "../template/Horizantalcard";
import TopNav from "../template/TopNav";
import { useEffect, useState } from "react";
import axios from "../utils/Axios";
import Loading from "../component/Loading";

export default function Home() {
  const [wallpaper, setWallpaper] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendingcard, settrendingcard] = useState([]);
  const [cardfiltr, setcardfiltr] = useState("all");
  document.title="MOVIEHUB | HOME"

  const getbanner = async () => {
    try {
      const data = await axios.get(`/trending/all/day`);

      setWallpaper(
        data.data.results[(Math.random() * data.data.results.length).toFixed()]
      );
      setLoading(false);
    } catch (err) {
      console.log("error", err);
      setLoading(false);
    }
  };


  const gethorizontalcard = async () => {
    try {
      const data = await axios.get(`/trending/${cardfiltr}/week`);

      settrendingcard(data.data.results);
    } catch (err) {
      console.log("error", err);
    }
  };


  useEffect(() => {
    gethorizontalcard()
  }, [cardfiltr]);

  useEffect(()=>{
    getbanner()
  },[])

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Sidenav />
      <div className="w-[80%]">
        <TopNav />
        <Header wallpaper={wallpaper} />
        <Horizantalcard data={trendingcard} func={(e)=>{setcardfiltr(e.target.value)}} title={"Trending"} type={"movie"} isseason={true} isclick={true}/>
      </div>
    </>
  );
}
