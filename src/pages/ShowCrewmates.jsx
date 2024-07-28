import { useParams, Link } from "react-router-dom";
import { useRef, useState } from "react";
import crewmates from "../json/crewmates.json";
import NotFound from "../components/NotFound";
import FixedNavBar from "../components/FixedNavBar";
import { IoIosClose, IoIosArrowBack } from "react-icons/io";
import NicknameSlider from "../components/NicknameSlider";
const ShowCrewmates = () => {
  const { slug } = useParams(); // Access the slug sfrom the URL
  const crewmate = crewmates.find((p) => p.link === slug);
  const nextRef = useRef(null);
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
          <section className="w-full flex h-36 items-center justify-center">
            <div className="w-4/12 flex justify-center">
              <img
                src="/assets/astronauts/Rocket.png"
                alt=""
                className="rotate-90 w-56"
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
            <div className="w-1/5 flex flex-col items-center justify-center gap-4">
              <div>
                <button
                  ref={nextRef}
                  className="text-white rounden-full border p-1 cursor-pointer rounded-3xl text-xl rotate-90"
                >
                  <IoIosArrowBack size={16} />
                </button>
              </div>
              <NicknameSlider
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
                nextRef={nextRef}
              />
            </div>
            <div className="w-4/5 flex h-full relative">
              <div className="w-1/4 relative">
                <div className="absolute bottom-0 left-[180px] w-[485px] -translate-x-1/2">
                  <img
                    src={crewmates[activeIndex].astronaut}
                    alt={crewmates[activeIndex].name}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-3/4 bg-red-400 rounded-tl-[80px] py-12  pl-28 pr-12 h-full">
                <h1 className="text-white text-[40px] font-metropolis font-bold">
                  {crewmates[activeIndex].name}
                </h1>
                <h2 className="font-jost text-white text-base uppercase mb-4">
                  {crewmates[activeIndex].position} -{" "}
                  {crewmates[activeIndex].title}
                </h2>
                {crewmates[activeIndex].description &&
                  Object.values(crewmates[activeIndex].description).map(
                    (desc, index) => (
                      <p
                        key={index}
                        className="font-jost text-white text-sm text-justify mb-4 ml-10"
                      >
                        {desc}
                      </p>
                    )
                  )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowCrewmates;
