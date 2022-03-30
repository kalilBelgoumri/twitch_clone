import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Sidebar />
      </main>
    </>
  );
}

export default Home;
