import React from "react";
import { IoIosAdd } from "react-icons/io";
import NavBar from "../components/NavBar";
import ReadMoreReadLess from "../components/ReadMoreReadLess";

const Index = () => {
  return (
    <div className="w-full m-0 p-0">
      <div className="w-screen h-screen p-0 -mt-8 bg-cover bg-indexbg py-8">
        <NavBar />
        <div className="mt-20 pl-20">
          <section className="w-48 h-48">
            <img src="../../public/assets/OOTBLogoWhite.png" alt="logo" />
          </section>
          <section className="mb-4">
            <h1 className="text-left text-7xl leading-none text-white font-metropolis font-bold tracking-tighter">
              <span>BOLD IDEAS</span>
              <br />
              <span>STELLAR RESULTS</span>
            </h1>
          </section>
          <section className="w-[500px]">
            <ReadMoreReadLess />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
