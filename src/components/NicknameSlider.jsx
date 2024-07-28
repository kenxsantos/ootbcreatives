import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import { Navigation } from "swiper/modules";
import crewmates from "../json/crewmates.json";

const NicknameSlider = ({ nextRef, setActiveIndex, activeIndex }) => {
  useEffect(() => {
    const swiper = document.querySelector(".swiper").swiper;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }, [nextRef]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="w-[100px] h-[400px] overflow-visible flex relative mt-12">
      <Swiper
        direction="vertical"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        centerInsufficientSlides={true}
        slideToClickedSlide={true}
        spaceBetween={50}
        navigation={{
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
        className="mySwiper flex flex-col items-center justify-center"
        onSlideChange={handleSlideChange}
      >
        {crewmates.map((crewmate, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex items-center justify-center h-32 ${
                index === activeIndex ? "text-4xl font-bold" : "text-lg"
              } text-white text-center font-metropolis transform -rotate-90 transition-all duration-300`}
            >
              <Link to={`/crewmates/${crewmate.link}`}>
                {crewmate.nickname}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NicknameSlider;
