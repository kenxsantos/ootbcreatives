import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "swiper/css";
import { Mousewheel, Navigation } from "swiper/modules";
import crewmates from "../json/crewmates.json";
import { motion } from "framer-motion";
const NicknameSlider = ({ nextRef, prevRef, setActiveIndex, activeIndex }) => {
  const { slug, id } = useParams(); // Extract id from URL params
  const navigate = useNavigate();
  const index = parseInt(id, 10) - 1;
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [id, nextRef, prevRef, setActiveIndex]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveIndex(currentIndex);
  };

  useEffect(() => {
    if (crewmates.length > 0) {
      const currentMate = crewmates[activeIndex];
      navigate(`/crewmates/${currentMate.link}/${currentMate.id}`);
    }
  }, [activeIndex, crewmates, navigate]);

  return (
    <div className="w-[100px] h-[400px] overflow-visible flex relative">
      <Swiper
        direction="vertical"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        centerInsufficientSlides={true}
        mousewheel
        speed={600}
        spaceBetween={50}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        modules={[Mousewheel, Navigation]}
        className="mySwiper flex flex-col items-center justify-center"
        onSlideChange={handleSlideChange}
        ref={swiperRef} // Attach the swiperRef to Swiper
      >
        {crewmates.map((crewmate, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex items-center justify-center h-32 ${
                index === activeIndex
                  ? "text-4xl font-bold hover:text-glow"
                  : "text-lg"
              } text-white text-center font-metropolis transform -rotate-90 transition-all duration-300`}
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
