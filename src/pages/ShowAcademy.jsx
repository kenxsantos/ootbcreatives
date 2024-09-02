import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import FixedNavBar from "../components/FixedNavBar";
import TransparentDiv from "../components/TransparentDiv";
import interns from "../json/interns.json";
import { motion } from "framer-motion";

const ShowAcademy = () => {
  const location = useLocation();
  const offer = location.state?.offer;

  return (
    <div className="relative bg-academy bg-cover mx-auto h-full">
      <div className="absolute inset-0 w-full h-full z-0 bg-black bg-opacity bg-opacity-50 flex">
        <div className="absolute inset-0 lg:w-1/2 h-full z-0 bg-black bg-opacity bg-opacity-10"></div>
      </div>
      <div className="relative z-10">
        <FixedNavBar />
        <div className="xs:px-3 xl:w-full xl:flex items-center lg:justify-between overflow-hidden">
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
            <div className="2xl:ml-10  px-8">
              <div>
                <section className="mb-4">
                  <h1 className="font-garnet xs:text-center text-glow lg:text-left font-extrabold xs:text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl flex flex-col leading-none text-white tracking-tighter uppercase">
                    {offer.title} &nbsp;
                    {offer.subtitle}
                  </h1>
                </section>
                <section className="xl:pr-24 xs:p-2">
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
                          className="font-jost text-base text-white text-justify list-disc pl-4"
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
              className="w-max p-4 font-jost border text-white xs:ml-10  mb-12 2xl:ml-10 xl:ml-10"
            >
              <Link to="/ootb/academy/meet-the-interns" state={{ offer }}>
                MEET THE INTERNS
              </Link>
            </motion.section>
          </section>
          <section className="relative xl:w-1/2 flex flex-col items-center">
            {interns.map((intern, index) => (
              <TransparentDiv
                key={index}
                index={index}
                title={intern.job}
                description={intern.description}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowAcademy;
