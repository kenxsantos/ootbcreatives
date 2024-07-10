import React from "react";
import NavBar from "../components/NavBar";
import ReadMoreReadLess from "../components/ReadMoreReadLess";

const Index = () => {
  return (
    <div className="bg-cover bg-fixed bg-indexbg">
      <div className="max-w-7xl mx-auto pt-8">
        <NavBar />
        <div className="mt-12">
          <section className="w-48 h-48">
            <img src="../../public/assets/OOTBLogoWhite.png" alt="logo" />
          </section>
          <section className="mb-4">
            <h1 className="text-left text-[65px] leading-none text-white font-metropolis font-bold tracking-tighter">
              <span>BOLD IDEAS</span>
              <br />
              <span>STELLAR RESULTS</span>
            </h1>
          </section>
          <section>
            <ReadMoreReadLess />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
