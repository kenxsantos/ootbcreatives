import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "swiper/css";
import { Navigation } from "swiper/modules";
import crewmates from "../json/crewmates.json";

const NicknameSlider = ({ nextRef, prevRef, setActiveIndex, activeIndex }) => {
  const { id } = useParams(); // Extract id from URL params
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const index = parseInt(id, 10) - 1;

  // Effect to set the slide based on URL id when the component mounts
  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      // Ensure navigation elements are properly set
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.navigation.init();
      swiper.navigation.update();

      // Convert id to index
      // Convert id to index

      if (index >= 0 && index < crewmates.length) {
        setActiveIndex(index); // Update state
        swiper.slideTo(index, 0); // Slide to the index immediately
      }
    }
  }, [id, nextRef, prevRef, setActiveIndex]);

  // Effect to navigate to the URL when the slide changes

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    setActiveIndex(index);

    // Update URL to the crewmate's link
  };

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
        slideToClickedSlide={true}
        spaceBetween={50}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
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
              <Link to={`/crewmates/${crewmate.link}/${crewmate.id}`}>
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
