import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
        className="h-full relative w-full pt-28 pb-28"
        onSlideChange={handleSlideChange}
      >
        {crewmates.map((crewmate, index) => (
          <SwiperSlide
            key={index}
            className="w-[35rem] h-full mx-auto flex justify-center bg-transparent"
          >
            <motion.section
              className={`rounded-2xl px-6 py-8 ${
                index === activeCard ? "bg-gradient-red" : "bg-gradient-purple"
              } `}
              animate={{
                scale: index === activeCard ? 1.25 : 1,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            >
              <div className="relative w-72 h-64">
                <div className="flex w-full">
                  <h1 className="font-metropolis text-white font-bold text-3xl leading-none w-3/4">
                    {crewmate.name}
                  </h1>
                  <div className="w-1/4">
                    {crewmate.rocket ? (
                      <motion.img
                        src={crewmate.rocket}
                        alt="rocket"
                        className="absolute w-40 h-40"
                        animate={{
                          scale: index === activeCard ? 1.05 : 1,
                          x: index === activeCard ? -50 : -50,
                          y: index === activeCard ? -85 : -70,
                          transition: { duration: 0.3, ease: "easeInOut" },
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div>
                  <h1 className="font-jost text-white text-xs uppercase mb-2">
                    {crewmate.position}
                  </h1>
                  <Link to={`/crewmates/${crewmate.link}`}>
                    <ReadMoreButton />
                  </Link>
                  <h1 className="absolute bottom-0 text-xs font-jost text-white uppercase">
                    {crewmate.title}
                  </h1>
                  {crewmate.satellite ? (
                    <motion.img
                      src={crewmate.satellite}
                      alt="rocket"
                      className="absolute w-40 h-40"
                      animate={{
                        scale: index === activeCard ? 1.25 : 1.2,
                        x: -60,
                        y: 60,
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="absolute bottom-0 right-0  w-44 h-44">
                  <motion.img
                    src={crewmate.astronaut}
                    alt={crewmate.title}
                    className="w-full h-full rounded-b-[40px] object-cover"
                    animate={{
                      scale: index === activeCard ? 1.4 : 1.3,
                      x: 5,
                      y: 10,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
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
