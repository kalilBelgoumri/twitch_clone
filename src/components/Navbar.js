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
      <div className="logo ml-2">
        <BsTwitch size={26} color="#9147FF" />
      </div>
      <Button size="large" type="link">
        Parcourir
      </Button>

      <FiMoreVertical size={20} />
      <div className="mx-auto">
        <Search />
      </div>
      <div className="flex mr-5">
        <div className="border py-1 px-1 rounded-sm bg-slate-200">
          <CgCrown />
        </div>
        <div className="px-3">
          <button className="border bg-slate-100 py-1 px-2 rounded-sm text-xs ">
            Se connecter
          </button>
        </div>
        <button className="border text-white py-1 px-2 rounded-sm text-xs bg-[#9147FF] ">
          S'inscrire
        </button>
        <div className="px-4 flex items-center">
          <RiUser3Line />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
