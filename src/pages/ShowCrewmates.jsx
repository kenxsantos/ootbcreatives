import { useParams, Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { useRef, useState, useEffect } from "react";
import crewmates from "../json/crewmates.json";
import NotFound from "../components/NotFound";
import FixedNavBar from "../components/FixedNavBar";
import { IoIosArrowBack } from "react-icons/io";
import NicknameSlider from "../components/NicknameSlider";
import { motion } from "framer-motion";
import CrewmatesDetails from "../components/CrewmatesDetails";
const ShowCrewmates = () => {
  const { slug, id } = useParams(); // Access the slug sfrom the URL
  const crewmate = crewmates.find((p) => p.link === slug);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const index = parseInt(id, 10) - 1;

  const [activeIndex, setActiveIndex] = useState(0);
  const imageSrc = crewmate.rocket || crewmate.satellite;
  const isRocket = !!crewmate.rocket;
  if (!crewmate) {
    return (
      <div className="w-full bg-indexbg h-screen">
        <NotFound />
      </div>
    );
  }
  return (
    <div className="relative w-screen bg-blurred-planets bg-cover mx-auto h-screen">
      <div className="w-full h-screen  flex flex-col">
        <div className="relative z-10">
          <FixedNavBar />
        </div>
        <div className="flex justify-between flex-col h-screen">
          <section className="relative w-full flex flex-col items-center justify-center pt-12">
            <div className="w-full flex justify-center items-center">
              <img
                src="/assets/logo/OOTBFlatWhite.png"
                alt=""
                className="xs:h-6 sm:h-10 lg:h-16"
              />
            </div>
            <div className="absolute xs:top-[45px] sm:top-[30px] md:-top-[20px] z-50 w-full  xs:pl-2 xs:pt-4 sm:pl-2 md:pl-20 2xl:pl-56 items-center">
              {imageSrc && (
                <motion.img
                  key={imageSrc}
                  src={imageSrc}
                  alt={isRocket ? "rocket" : "satellite"}
                  className={`xs:w-24 sm:w-28 md:w-36 lg:w-48 xl:w-56 ${
                    crewmate.rocket ? "rotate-120" : "rotate-0"
                  }`}
                />
              )}
            </div>
          </section>
          <section className="flex flex-col items-center">
            <div className="w-full mb-4">
              <Link
                to="/"
                className="flex items-center justify-end pr-12 text-white font-jost text-base"
              >
                <IoIosClose size={20} />
                Close
              </Link>
            </div>
            <section className="w-full xs:flex-col flex xl:flex-row">
              <div className="xs:w-full xl:w-1/5 flex xl:flex-col xs:flex-row h-full items-center justify-center xs:order-last xl:order-first ">
                <div>
                  <button
                    ref={nextRef}
                    className="text-white xl:rounded-full border p-1 cursor-pointer rounded-3xl text-xl  xl:rotate-90 xl:mb-1"
                  >
                    <IoIosArrowBack size={16} />
                  </button>
                </div>
                <NicknameSlider
                  setActiveIndex={setActiveIndex}
                  activeIndex={activeIndex}
                  nextRef={nextRef}
                  prevRef={prevRef}
                />
                <div>
                  <button
                    ref={prevRef}
                    className="text-white xl:rounded-full border p-1 cursor-pointer rounded-3xl text-xl xs:rotate-180 xl:-rotate-90  xl:mt-8"
                  >
                    <IoIosArrowBack size={16} />
                  </button>
                </div>
              </div>
              <CrewmatesDetails activeIndex={activeIndex} />
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowCrewmates;
