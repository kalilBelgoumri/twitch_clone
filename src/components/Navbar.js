import React from "react";
import Search from "./Search";
import { CgCrown } from "react-icons/cg";
import { RiUser3Line } from "react-icons/ri";
import { FiMoreVertical } from "react-icons/fi";
import { BsTwitch } from "react-icons/bs";

function Navbar() {
  return (
    <div className="">
      <div className="flex justify-between items-center w-screen bg-white shadow-2xl  cursor-pointer h-12  ">
        <div className="flex items-center">
          <div className="logo ml-2 mr-5">
            <BsTwitch className="text-3xl" color="#9147FF" />
          </div>
          <div className="-ml-3 lg:ml-3">
            <span className="text-black font-bold text-lg hover:text-[#9147FF]">
              Parcourir
            </span>
          </div>
          <div className="lg:ml-8 text-sm hover:rounded-sm py-1 px-1 hover:bg-slate-200">
            <FiMoreVertical className="text-xl" />
          </div>
        </div>
        <div className="mx-auto ">
          <Search />
        </div>
        <div className="flex items-center mr-3 lg:mr-5">
          <div className="-mr-3 border-none hover:border py-1 px-1 rounded-sm hover:bg-slate-200">
            <CgCrown className=" text-xl " />
          </div>
          <div className="px-3 flex">
            <button className=" text-[6px] lg:border bg-slate-100 text-black lg:text-[10px]  truncate font-bold py-1.5 px-4 rounded-md text-xs hover:bg-slate-200 ">
              Se connecter
            </button>
          </div>
          <button className="text-[6px] border text-white py-1.5 px-3 font-bold rounded-md text-xs bg-[#9147FF] hover:bg-purple-600 ">
            S'inscrire
          </button>
          <div className="ml-1 hover:rounded-sm py-1 px-1 hover:bg-slate-200">
            <RiUser3Line className=" text-lg " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
