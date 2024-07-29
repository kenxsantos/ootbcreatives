import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReadMoreButton from "./ReadMoreButton";
import crewmates from "../json/crewmates.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";

const CrewmatesCard = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveCard(swiper.realIndex);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        mousewheel={true}
        centerInsufficientSlides={true}
        spaceBetween={0}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Mousewheel, Pagination, Navigation]}
        className="h-full py-8 relative w-full py-20"
        onSlideChange={handleSlideChange}
      >
        {crewmates.map((crewmate, index) => (
          <SwiperSlide
            key={index}
            className="w-[35rem] h-full mx-auto flex justify-center bg-transparent"
          >
            <motion.section
              className={`rounded-2xl px-6 py-8 ${
                index === activeCard ? "bg-orange" : "bg-purple"
              } `}
              animate={{
                scale: index === activeCard ? 1.25 : 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            >
              <div className="relative w-72 h-64">
                <div className="flex w-full">
                  <h1 className="font-metropolis text-white font-bold text-3xl leading-none w-3/4">
                    {crewmate.name}
                  </h1>
                  <div className="w-1/4">
                    <img
                      src="/assets/astronauts/Rocket.png"
                      alt="rocket"
                      className="absolute w-40 h-40 -top-20 -right-10"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="font-jost text-white text-xs uppercase mb-2">
                    {crewmate.position}
                  </h1>
                  <Link
                    to={`/crewmates/${crewmate.link}/${crewmate.id}`}
                    key={index}
                  >
                    <ReadMoreButton />
                  </Link>
                  <h1 className="absolute bottom-0 text-xs font-jost text-white uppercase">
                    {crewmate.title}
                  </h1>
                </div>
                <div className="absolute bottom-0 right-0 -mb-10 -mr-8 w-44 h-44">
                  <img
                    src={crewmate.astronaut}
                    alt={crewmate.title}
                    className="w-full h-full rounded-b-3xl object-cover"
                  />
                </div>
              </div>
            </motion.section>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative bottom-8 flex items-center justify-center mt-16 ">
        <div className="flex  justify-evenly gap-28 items-center justify-center">
          <div className="custom-pagination flex justify-center w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CrewmatesCard;
