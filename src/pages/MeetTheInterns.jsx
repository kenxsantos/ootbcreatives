import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import FixedNavBar from "../components/FixedNavBar";
import { motion } from "framer-motion";
import internsData from "../json/internship.json";
import InternsProfile from "../components/InternsProfile";
import DropdownButton from "../components/DropdownButton";

const MeetTheIntern = () => {
  const years = internsData.map((internYear) => internYear.year.toString());
  const [selectedYear, setSelectedYear] = useState(years[0]); // default to the first year
  const [hoveredBatch, setHoveredBatch] = useState(null);

  const selectedData = internsData.find(
    (internYear) => internYear.year.toString() === selectedYear
  );

  const batches = selectedData ? selectedData.batch : {};
  const location = useLocation();
  const offer = location.state?.offer;

  return (
    <div className="relative max-w-screen-2xl bg-academy bg-cover mx-auto h-full">
      <div className="absolute inset-0 w-full h-full z-0 bg-black bg-opacity-10">
        <div className="absolute inset-0 w-1/2 h-full z-0 bg-black bg-opacity-40"></div>
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
                  BACK TO HOME
                </span>
              </div>
            </Link>
            <div className="ml-10">
              <div>
                <section className="mb-4">
                  <h1 className="font-metropolis font-extrabold text-6xl flex flex-col leading-none text-white tracking-tighter text-glow uppercase">
                    {offer.title} <br />
                    {offer.subtitle}
                  </h1>
                </section>
                <section className=" pr-24">
                  {offer.paragraph && (
                    <div>
                      {Object.values(offer.paragraph).map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="font-jost text-base text-white mb-4 text-justify"
                        >
                          {paragraph}
                        </p>
                      ))}
                      {Object.values(offer.list).map((item, idx) => (
                        <li
                          key={idx}
                          className="font-jost text-base text-white text-justify list-disc"
                        >
                          {item}
                        </li>
                      ))}
                      <p className="font-jost text-base text-white mb-4 text-justify mt-4">
                        {offer.end}
                      </p>
                    </div>
                  )}
                </section>
              </div>
            </div>
            <motion.section
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.1, cursor: "pointer" }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-max p-4 font-jost text-white mb-4 border ml-10"
            >
              <Link to="/">COME ON BOARD NOW</Link>
            </motion.section>
          </section>

          <section className="relative w-1/2 flex flex-col">
            <div className="flex justify-center gap-8 px-20 items-center h-28 w-full pl-32">
              <h1 className="text-white font-metropolis text-3xl text-left font-bold">
                Meet the interns!
              </h1>
              <DropdownButton
                years={years}
                selectedYear={selectedYear}
                onSelectYear={setSelectedYear}
              />
            </div>
            <div className="px-20 h-[730px] flex items-center justify-center overflow-hidden">
              <InternsProfile
                year={selectedYear}
                batches={batches}
                hoveredBatch={hoveredBatch}
                setHoveredBatch={setHoveredBatch}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MeetTheIntern;
