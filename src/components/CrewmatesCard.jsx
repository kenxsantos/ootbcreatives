import { useState } from "react";
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
  const handleSlideChange = (swiper) => {
    setActiveCard(swiper.realIndex);
  };

  return (
    <div className="mx-auto 3xl:px-12">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1} // Default for small screens
        mousewheel={true}
        spaceBetween={10}
        modules={[Mousewheel, Pagination, Navigation]}
        className="h-full w-full pt-24 pb-28"
        onSlideChange={handleSlideChange}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 180,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: -150,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: -200,
          },
        }}
      >
        {crewmates.map((crewmate, index) => (
          <SwiperSlide
            key={index}
            className="w-[35rem] h-full mx-auto flex justify-center bg-transparent"
          >
            <motion.section
              className={`rounded-2xl xs:px-4 xs:py-6 sm:px-6  sm:py-8 ${
                index === activeCard ? "bg-gradient-red" : "bg-gradient-purple"
              } `}
              animate={{
                scale: index === activeCard ? 1.25 : 1,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            >
              <div className="relative xs:w-56 xs:h-48 sm:w-72 sm:h-64">
                <div className="flex w-full">
                  <h1 className="font-metropolis text-white font-bold xs:text-xl sm:text-3xl leading-none w-3/4">
                    {crewmate.name}
                  </h1>
                  <div className="w-1/4">
                    {crewmate.rocket ? (
                      <motion.img
                        src={crewmate.rocket}
                        alt="rocket"
                        className="absolute xs:w-28 xs:h-28 xs:ml-8 xs:mt-4 sm:mt-0 sm:ml-0 sm:w-40 sm:h-40"
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
                  <h1 className="font-jost text-white xs:text-[10px] text-xs uppercase mb-2">
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
                      className="absolute xs:w-28 xs:h-28 xs:ml-8 xs:mt-4 sm:mt-0 sm:ml-0 sm:w-40 sm:h-40"
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
                <div className="absolute bottom-0 right-0 xs:w-32 xs:h-32 xs:left-28 xs:top-18  sm:w-44 sm:h-44">
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
    </div>
  );
};

export default CrewmatesCard;
