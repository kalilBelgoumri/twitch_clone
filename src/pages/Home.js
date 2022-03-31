import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <div className="overflow-hidden w-screen h-screen">
        <Navbar />
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Home;
