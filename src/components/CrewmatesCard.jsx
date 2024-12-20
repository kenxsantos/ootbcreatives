import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "motion/react"
import ReadMoreButton from "./ReadMoreButton";
import crewmates from "../json/crewmates.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import CrewmatesModal from "./CrewmatesModal";

const CrewmatesCard = () => {
  const [activeCard, setActiveCard] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveCard(swiper.realIndex);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const controls = useAnimation();

  const openModal = (item) => {
    setModalContent(item);
    setIsOpen(true);
    controls.stop(); // Stop the animation when modal opens
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="mx-auto 3xl:px-12">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3} 
        modules={[Mousewheel, Pagination, Navigation]}
        className="h-full w-full pt-24 2xl:pt-28 pb-32"
        onSlideChange={handleSlideChange}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 180,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 2,
        //     spaceBetween: -150,
        //   },
        //   1280: {
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },
        //   1920: {
        //     slidesPerView: 3,
        //     spaceBetween: 0,
        //   },
        // }}
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
              <div className="relative xs:w-56 xs:h-48 sm:w-96 sm:h-64">
                <div className="flex w-full">
                  <h1 className="font-metropolis text-white font-bold xs:text-xl sm:text-3xl leading-none w-3/4">
                    {crewmate.name}
                  </h1>
                  <div className="w-1/4">
                    {crewmate.rocket && (
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
                    )}
                  </div>
                </div>
                <div>
                  <h1 className="font-jost text-white xs:text-[10px] text-xs uppercase mb-2">
                    {crewmate.position}
                  </h1>
                  <div onClick={() => openModal(crewmate)}>
                     <ReadMoreButton />
                  </div>
                   
                  <h1 className="absolute bottom-0 text-xs font-jost text-white uppercase">
                    {crewmate.title}
                  </h1>
                  {crewmate.satellite && (
                    <motion.img
                      src={crewmate.satellite}
                      alt="rocket"
                      className="absolute xs:w-28 xs:h-28 xs:ml-8 xs:-mt-4 sm:mt-0 sm:ml-0"
                      animate={{
                        scale: index === activeCard ? 1.25 : 1.2,
                        x: -60,
                        y: 60,
                        transition: { duration: 0.3, ease: "easeInOut" },
                      }}
                    />
                  )}
                </div>
                <div className="absolute bottom-0 right-0 xs:w-32 xs:h-32 xs:left-44 xs:top-18  sm:w-44 sm:h-44">
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
        <div className="custom-pagination">
          <div className="swiper-button-prev slider-arrow text-white xs:hidden xl:block">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow text-white xs:hidden xl:block">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination w-full xs:mt-20"></div>
        </div>
      </Swiper>
      <CrewmatesModal
        isOpen={isOpen}
        close={() => {
          closeModal();
        }}
        modalContent={modalContent}
      />
    </div>
  );
};

export default CrewmatesCard;
