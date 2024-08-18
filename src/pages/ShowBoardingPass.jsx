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
  const [selectedBatch, setSelectedBatch] = useState(batch || "batch-1"); // Default to batch 1 if no batch is provided in the URL
  const formattedName = (name) => name.toLowerCase().replace(/ /g, "-");

  const yearData = internship.find((data) => data.year.toString() === year);

  console.log("yearData:" + yearData);

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
              <InternsWork internData={internData} />
            </div>
          </section>
          <section className="relative w-1/2 flex flex-col">
            <InternsBoardingPass internData={internData} yearData={yearData} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowBoardingPass;
