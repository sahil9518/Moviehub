import notfound from "../../public/notfound.gif";

const NotFound = () => {
  return (
    <div className="w-full h-screen">
      <img src={notfound} className="w-full h-screen"></img>
    </div>
  );
};

export default NotFound;
