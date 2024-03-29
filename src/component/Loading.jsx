import loader from "/loader.gif";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center">
      <img
        className="w-[30%]  block ml-auto mr-auto object-cover "
        src={loader}
      />
    </div>
  );
};

export default Loading;
