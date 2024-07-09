import React from "react";
import { IoIosAdd } from "react-icons/io";
import ReadMoreArea from "@foxeian/react-read-more";
import NavBar from "../components/NavBar";
import ReadMoreReadLess from "../components/ReadMoreReadLess";

const Index = () => {
  return (
    <div className="w-screen h-screen -ml-16 p-0 -mt-8 bg-cover bg-indexbg bg-cover pl-12 pt-8">
      <NavBar />
      <section className="w-48 h-48 mt-20">
        <img src="../../public/assets/OOTBLogoWhite.png" alt="logo" />
      </section>
      <section className="mb-4">
        <h1 className="text-left text-[45px] leading-none text-white font-metropolis font-extrabold">
          <span>EXPLORE THE WORLD OF</span>
          <br />
          <span>ADVERTISING WITH US!</span>
        </h1>
      </section>
      <section className="w-[500px]">
        <ReadMoreReadLess />
      </section>
    </div>
  );
};

export default Index;
