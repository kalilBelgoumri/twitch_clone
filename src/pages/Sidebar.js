import { useState } from "react";
import { BiArrowFromRight, BiArrowFromLeft } from "react-icons/bi";
function Sidebar() {
  const [active, setActive] = useState(false);

  const toogleClass = () => {
    setActive(!active);
  };

  return (
    <>
      {active ? (
        <div className="bg-[#EFEFF1] w-60 fixed h-screen" />
      ) : (
        <div className="bg-[#EFEFF1] w-16 fixed h-screen" />
      )}
      {active ? (
        <div className="flex items-center absolute mt-[3vh] ml-[10px] ">
          <span className="font-bold text-xs ">CHAÎNES RECOMMANDÉES</span>
          <BiArrowFromRight
            className="cursor-pointer"
            onClick={toogleClass}
            size="21px"
          />
        </div>
      ) : (
        <div className="flex items-center absolute mt-[10vh] ml-[1vw] ">
          <span className="hidden ">CHAÎNES RECOMMANDÉES</span>
          <div className="hidden">
            <BiArrowFromRight
              className="cursor-pointer"
              onClick={toogleClass}
              size="25px"
            />
          </div>
          <div className="-mt-[10vh]">
            <div className="block">
              <BiArrowFromLeft
                className="cursor-pointer"
                onClick={toogleClass}
                size="25px"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
