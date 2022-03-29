import React from "react";
import Search from "./Search";

import { CgCrown } from "react-icons/cg";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white shadow-2xl h-12 cursor-pointer ">
      <div className="mx-auto">
        <Search />
      </div>
      <div className="flex">
        <div className=" border py-1 px-1 rounded-sm bg-slate-200">
          <CgCrown />
        </div>
        <div className="px-3">
          <button className="border bg-slate-100 py-0.5 px-2 rounded-sm text-xs ">
            Se connecter
          </button>
        </div>
        <button className="border bg-slate-100 py-0.5 px-2 rounded-sm text-xs ">
          S'inscrire
        </button>
      </div>
    </div>
  );
}

export default Navbar;
