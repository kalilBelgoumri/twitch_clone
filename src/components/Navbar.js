import React from "react";
import Search from "./Search";
import { Button } from "antd";
import { CgCrown } from "react-icons/cg";
import { RiUser3Line } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";
import { BsTwitch } from "react-icons/bs";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white shadow-2xl h-12 cursor-pointer ">
      <div className="flex items-center">
        <div className="logo ml-2 mr-5">
          <BsTwitch size={26} color="#9147FF" />
        </div>
        <div className="flex">
          <span className="text-black font-medium text-lg hover:text-[#9147FF]">
            Parcourir
          </span>
        </div>
        <div className="ml-12">
          <FiMoreVertical size={22} />
        </div>
      </div>
      <div className="mx-auto">
        <Search />
      </div>
      <div className="flex items-center mr-5">
        <div className=" border-none hover:border py-1 px-1 rounded-sm hover:bg-slate-200">
          <CgCrown size={20} />
        </div>
        <div className="px-3">
          <button className="border bg-slate-100 text-black font-medium py-1.5 px-4 rounded-sm text-xs hover:bg-slate-200 ">
            Se connecter
          </button>
        </div>
        <button className="border text-white py-1.5 px-3 font-medium rounded-md text-xs bg-[#9147FF] hover:bg-purple-600 ">
          S'inscrire
        </button>
        <div className="ml-4 hover:rounded-sm py-1 px-1 hover:bg-slate-200">
          <RiUser3Line size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
