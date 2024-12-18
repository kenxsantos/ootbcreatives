import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import careers from "../json/careers.json";
const ShowCareers = () => {
  return (
    <div className="relative bg-clear-planets bg-cover mx-auto xs:h-full 2xl:h-screen">
      <div className="relative z-10">
        <div className="w-full ">
          <section className="relative w-full flex flex-col px-12">
            <Link to="/">
              <div className="flex items-center h-36 -ml-12 justify-start ">
                <div className="rotate-90 w-36 -ml-[63px]">
                  <img
                    src="/assets/others/BackShadow.webp"
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
          </section>
          <section className="flex xs:flex-col lg:flex-row xs:px-4 sm:px-0 sm:w-4/5 mx-auto items-center justify-center gap-4">
            <div>
              <h1 className="tracking-tighter xs:text-center font-metropolis text-glow text-white text-5xl font-extrabold uppercase">
                OOTB Careers
              </h1>
            </div>
            <div>
              <p className="flex flex-col leading-tight text-white font-jost xs:text-center sm:text-justify">
                <span>
                  Do you have what it takes to come up with otherworldly ideas?
                </span>
                <span>
                  Find your spot and join our wonderful crew of creative minds!
                </span>
              </p>
            </div>
          </section>
          <section className="flex flex-wrap items-center justify-center gap-4 mt-12 px-4 py-8">
            {careers.map((career, index) => (
              <Link
                to={`/ootb/careers/${career.link}`}
                state={{ career }}
                key={index}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-48 xs:w-60 md:w-72 lg:w-60 h-64 sm:h-72 bg-gray-500 bg-opacity-60 p-6 rounded-2xl flex flex-col justify-end hover:cursor-pointer"
                >
                  <h1 className="font-garnet font-extrabold text-xl sm:text-2xl text-white text-glow uppercase">
                    {career.position}
                  </h1>
                  <p className="font-jost text-white text-sm sm:text-base leading-tight">
                    {career.description.length > 50
                      ? `${career.description.slice(0, 50)}...`
                      : career.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowCareers;
