import { useState } from "react";
import { BiArrowFromRight } from "react-icons/bi";

function Sidebar() {
  const [active, setActive] = useState(false);

  const toogleClass = () => {
    setActive(!active);
  };

  const chaineActive = () => {
    return active ? (
      <div className="hidden" />
    ) : (
      <div className="bg-red-300"></div>
    );
  };

  return (
    <>
      <div className={active ? "sidebarOpen" : "sidebarClose"}>
        <div className="flex items-center absolute top-20 ml-[1vw] ">
          <span className="font-bold chaine">CHAÎNES RECOMMANDÉES</span>
          <BiArrowFromRight
            className="cursor-pointer"
            onClick={function (e) {
              toogleClass();
              chaineActive();
            }}
            size="25px"
          />
        </div>
      </div>
      ;
    </>
  );
}

export default Sidebar;
