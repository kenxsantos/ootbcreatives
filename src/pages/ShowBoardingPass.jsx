import React from "react";

import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import FixedNavBar from "../components/FixedNavBar";
import internship from "../json/internship.json";
import { useState } from "react";
import InternsWork from "../components/InternsWork";
import InternsBoardingPass from "../components/InternsBoardingPass";
const ShowBoardingPass = () => {
  const { batch, year, intern } = useParams();
  const [selectedBatch, setSelectedBatch] = useState(batch || "batch-1");
  const formattedName = (name) => name.toLowerCase().replace(/ /g, "-");

  const yearData = internship.find((data) => data.year.toString() === year);

  const findIntern = () => {
    const batchKey = selectedBatch.replace("batch-", "");

    if (!yearData) return null;
    const batchData = yearData.batch[batchKey];
    if (!batchData) return null;

    return (
      Object.values(batchData).find(
        (internData) => formattedName(internData.name) === intern
      ) || null
    );
  };

  const internData = findIntern();

  console.log(internData);
  if (!internData) {
    return <div>Intern not found</div>;
  }
  return (
    <div className="relative w-screen bg-academy bg-cover mx-auto h-full">
      <div className="absolute inset-0 w-full h-full z-0 bg-black bg-opacity bg-opacity-50 flex">
        <div className="absolute inset-0 lg:w-1/2 h-full z-0 bg-black bg-opacity bg-opacity-10"></div>
      </div>
      <div className="relative z-10">
        <FixedNavBar />
        <div className="xs:px-3 xl:w-full xl:flex lg:justify-between overflow-hidden">
          <section className="relative w-full xl:w-1/2 flex flex-col">
            <Link to="/">
              <div className="flex items-center xs:h-24 md:h-28 x:-ml-5 sm:-ml-9 md:-ml-12 justify-start w-full">
                <div className="rotate-90 xs:w-28 xs:-ml-[60px] md:w-36 md:-ml-7 xl:-ml-16">
                  <img
                    src="/assets/others/BackShadow.png"
                    alt="Back Flare"
                    className="transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow"
                  />
                </div>
                <span className="text-white font-jost flex items-center gap-4 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow">
                  <IoIosArrowBack size={24} />
                  <p className="xs:text-xs md:text-base">
                    BACK TO OTHER SERVICES
                  </p>
                </span>
              </div>
            </Link>
            <div>
              <InternsWork internData={internData} />
            </div>
          </section>
          <section className="relative xs:w-full xl:w-1/2 flex flex-col h-full mx-auto sm:px-12 items-center justify-center ">
            <InternsBoardingPass internData={internData} yearData={yearData} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowBoardingPass;
