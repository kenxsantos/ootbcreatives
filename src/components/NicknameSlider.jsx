import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "swiper/css";
import { Mousewheel, Navigation } from "swiper/modules";
import crewmates from "../json/crewmates.json";
const NicknameSlider = ({ nextRef, prevRef, setActiveIndex, activeIndex }) => {
  const { slug } = useParams(); // Extract id from URL params
  const navigate = useNavigate();
  const crewmate = crewmates.find((p) => p.link === slug);
  const index = crewmate.id - 1;
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
      if (crewmates.length > 0) {
        const currentMate = crewmates[activeIndex];
        navigate(`/crewmates/${currentMate.link}`);
      }
    }
  }, [nextRef, prevRef, activeIndex, crewmates, navigate]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveIndex(currentIndex);
  };

  return (
    <div className="xs:w-full sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[100px] xl:h-[400px] overflow-visible flex">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        initialSlide={index}
        slidesPerView={3}
        centerInsufficientSlides={true}
        mousewheel
        speed={600}
        spaceBetween={50}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        breakpoints={{
          390: {
            direction: "horizontal",
          },
          1280: {
            direction: "vertical",
          },
        }}
        modules={[Mousewheel, Navigation]}
        onSlideChange={handleSlideChange}
        ref={swiperRef}
      >
        {crewmates.map((crewmate, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex items-center justify-center h-24 w-full ${
                index === activeIndex
                  ? "text-4xl font-bold hover:text-glow"
                  : "text-lg"
              } text-white text-center font-metropolis transform xl:-rotate-90 transition-all duration-300`}
            >
              {crewmate.nickname}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NicknameSlider;
