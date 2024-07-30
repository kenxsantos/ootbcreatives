import { useParams, Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import crewmates from "../json/crewmates.json";
import NotFound from "../components/NotFound";
import FixedNavBar from "../components/FixedNavBar";
import { IoIosClose, IoIosArrowBack } from "react-icons/io";
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
  if (!crewmate) {
    return (
      <div className="w-full bg-indexbg h-screen">
        <NotFound />
      </div>
    );
  }
  return (
    <div className="relative max-w-screen-2xl bg-clear-planets bg-cover mx-auto h-full">
      <div className="absolute inset-0 w-full h-full z-0 "></div>
      <div className="relative z-10">
        <FixedNavBar />
        <div className="w-full h-full">
          <section className="w-full flex h-36  items-center justify-center">
            <div className="w-4/12 flex justify-end -mb-16  pr-8">
              <img
                src="/assets/astronauts/Rocket.png"
                alt=""
                className="rotate-120 w-60"
              />
            </div>
            <div className="w-4/12 flex justify-center items-center">
              <img
                src="/assets/logo/OOTBFlatWhite.png"
                alt=""
                className="h-16"
              />
            </div>
            <div className="w-4/12">
              <Link
                to="/"
                className="flex items-center justify-end pr-12 text-white font-jost text-base"
              >
                <IoIosClose size={20} />
                Close
              </Link>
            </div>
          </section>
          <section className="w-full flex mt-12">
            <div className="w-1/5 flex flex-col items-center justify-center pb-12">
              <div>
                <button
                  ref={nextRef}
                  className="text-white rounded-full border p-1 cursor-pointer rounded-3xl text-xl rotate-90 mb-1"
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
                  className="text-white rounded-full border p-1 cursor-pointer rounded-3xl text-xl -rotate-90 mt-8"
                >
                  <IoIosArrowBack size={16} />
                </button>
              </div>
            </div>
            <CrewmatesDetails activeIndex={activeIndex} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowCrewmates;
