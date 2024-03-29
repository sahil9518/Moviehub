const Dropdown = ({ title, option, func }) => {
  return (
    <>
      <div className="hidden sm:block flex" >
        <div className="select mr-3 lg:mr-7 mt-2 text-sm ">
          <select
            defaultValue="0"
            name="format"
            id="format"
            onChange={func}
            className=""
          >
            <option value="0" className="bg-grey" disabled>
              {title}
            </option>
            {option.map((cv, ind) => {
              return (
                <option key={ind} className="bg-white text-black">
                  {cv}
                </option>
              );
            })}
          </select>
          <i className="ri-arrow-down-s-fill absolute top-1/2 transform -translate-y-1/2 right-2 text-white text-xl"></i>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
