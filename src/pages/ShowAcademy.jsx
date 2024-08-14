import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import FixedNavBar from "../components/FixedNavBar";
import TransparentDiv from "../components/TransparentDiv";
import interns from "../json/interns.json";
import { motion } from "framer-motion";

const ShowAcademy = () => {
  const location = useLocation();
  const offer = location.state?.offer;

  const width = 530;
  return (
    <div className="relative max-w-screen-2xl bg-academy bg-cover mx-auto h-full">
      <div className="absolute inset-0 w-full h-full z-0 bg-black bg-opacity-10">
        <div className="absolute inset-0 w-1/2 h-full z-0 bg-black  bg-opacity-30"></div>
      </div>
      <div className="relative z-10">
        <FixedNavBar />
        <div className="w-full flex">
          <section className="relative w-1/2 flex flex-col px-12">
            <Link to="/">
              <div className="flex items-center h-36 -ml-12 justify-start ">
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
            <div className="ml-10">
              <div>
                <section className="mb-4">
                  <h1 className="font-metropolis font-extrabold text-6xl flex flex-col leading-none text-white tracking-tighter text-glow uppercase">
                    {offer.title} <br />
                    {offer.subtitle}
                  </h1>
                </section>
                <section className=" pr-24">
                  {(offer.paragraph && (
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
                  )) ||
                    (offer.list && (
                      <ul>
                        {Object.values(offer.list).map((listItem, index) => (
                          <li
                            key={index}
                            className="text-white font-jost text-base text-left leading-none"
                          >
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    ))}
                </section>
              </div>
            </div>

            <motion.section
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.1, cursor: "pointer" }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-max p-4 font-jost text-white mb-12 border  ml-10"
            >
              <Link to="/ootb/academy/meet-the-interns">MEET THE INTERNS</Link>
            </motion.section>
          </section>
          <section className="relative w-1/2 flex flex-col px-12 h-[600px] mx-auto mt-36 items-center justify-center">
            {interns.map((intern, index) => (
              <TransparentDiv
                width={width}
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
