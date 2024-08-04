import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import FixedNavBar from "../components/FixedNavBar";
import offers from "../json/offers.json";
import TransparentDiv from "../components/TransparentDiv";
import interns from "../json/interns.json";
import AcademyCard from "../components/AcademyCard";
const ShowAcademy = () => {
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
            {offers.map((offer, index) => (
              <div className="ml-10" key={index}>
                {offer.academy && (
                  <div>
                    <section className="mb-4">
                      <h1 className="font-metropolis font-bold text-6xl flex flex-col leading-none text-white tracking-tighter text-glow uppercase">
                        {offer.academy.title} <br />
                        {offer.academy.subtitle}
                      </h1>
                    </section>
                    <section className=" pr-24">
                      {Object.values(offer.academy.paragraph).map(
                        (paragraph, idx) => (
                          <p
                            key={idx}
                            className="font-jost text-base text-white mb-4 text-justify"
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                      <ul>
                        {Object.values(offer.academy.list).map((item, idx) => (
                          <li
                            key={idx}
                            className="font-jost text-base text-white text-justify list-disc ml-8"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="font-jost text-base text-white mb-4 text-justify mt-4">
                        {offer.academy.end}
                      </p>
                    </section>
                  </div>
                )}
              </div>
            ))}
            <section className="w-max p-4 font-jost text-white mb-12 border  ml-10">
              <Link to="/">COME ONBOARD NOW</Link>
            </section>
          </section>
          <section className="relative w-1/2 flex flex-col ">
            <AcademyCard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowAcademy;
