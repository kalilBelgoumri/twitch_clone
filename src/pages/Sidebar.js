import { useState } from "react";
import { BiArrowFromRight } from "react-icons/bi";

function Sidebar() {
  const [active, setActive] = useState(false);

  const toogleClass = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={active ? "sidebarOpen" : "sidebarClose"}>
        <div className="flex items-center fixed top-20 ml-[1vw] ">
          <span className="font-bold ">CHAÎNES RECOMMANDÉES</span>
          <BiArrowFromRight
            className="cursor-pointer"
            onClick={toogleClass}
            size="25px"
          />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
