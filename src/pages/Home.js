import { Box, Container } from "@chakra-ui/react";
import React from "react";
import CarouselDemo from "../components/Carousel";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <div className="overflow-hidden w-screen h-screen">
        <Navbar />

        <Sidebar />
        <main className="mt-10 flex justify-center items-center">
          <Container maxW="2xl" centerContent>
            <CarouselDemo />
          </Container>
        </main>
      </div>
    </>
  );
}

export default Home;
