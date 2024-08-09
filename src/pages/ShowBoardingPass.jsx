import React from "react";

import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import FixedNavBar from "../components/FixedNavBar";

import { useState } from "react";
import InternsWork from "../components/InternsWork";
import InternsBoardingPass from "../components/InternsBoardingPass";
const ShowBoardingPass = () => {
  return (
    <div className="relative max-w-screen-2xl bg-academy bg-cover mx-auto h-full">
      <div className="absolute inset-0 w-full h-full z-0 bg-black bg-opacity-10">
        <div className="absolute inset-0 w-1/2 h-full z-0 bg-black  bg-opacity-40"></div>
      </div>
      <div className="relative z-10">
        <FixedNavBar />
        <div className="w-full flex">
          <section className="relative w-1/2 flex flex-col px-12">
            <Link to="/">
              <div className="flex items-center h-36 -ml-12 justify-start">
                <div className="rotate-90 w-36 -ml-[60px]">
                  <img
                    src="/assets/others/BackShadow.png"
                    alt="Back Flare"
                    className="transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow"
                  />
                </div>
                <span className="text-white font-jost flex items-center gap-4 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow">
                  <IoIosArrowBack size={24} />
                  BACK TO OTHER SERVICES
                </span>
              </div>
            </Link>
            <div>
              <InternsWork />
            </div>
          </section>
          <section className="relative w-1/2 flex flex-col">
            <InternsBoardingPass />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowBoardingPass;
