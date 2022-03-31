import { useState } from "react";
import { BiArrowFromRight } from "react-icons/bi";
function Sidebar() {
  const [active, setActive] = useState(false);

  const toogleClass = () => {
    setActive(!active);
  };

  return (
    <>
      {active ? (
        <div className="bg-gray-300 w-64 fixed h-screen" />
      ) : (
        <div className="bg-gray-300 w-20 fixed h-screen" />
      )}
      {active ? (
        <div className="flex items-center absolute mt-[10vh] ml-[1vw] ">
          <span className="font-bold ">CHAÎNES RECOMMANDÉES</span>
          <BiArrowFromRight
            className="cursor-pointer"
            onClick={toogleClass}
            size="25px"
          />
        </div>
      ) : (
        <div className="flex items-center absolute mt-[10vh] ml-[1vw] ">
          <span className="hidden ">CHAÎNES RECOMMANDÉES</span>
          <BiArrowFromRight
            className="cursor-pointer"
            onClick={toogleClass}
            size="25px"
          />
        </div>
      )}
    </>
  );
}

export default Sidebar;
