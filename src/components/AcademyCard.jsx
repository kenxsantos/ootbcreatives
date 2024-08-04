import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Mousewheel,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import interns from "../json/interns.json";
import TransparentDiv from "./TransparentDiv";
import { useNavigate } from "react-router-dom";

const AcademyCard = () => {
  const [activeCard, setActiveCard] = useState(0);
  const navigate = useNavigate();
  const handleSlideChange = (swiper) => {
    setActiveCard(swiper.realIndex);
  };
  return (
    <div>
      <Swiper
        effect={"slide"}
        direction="vertical"
        grabCursor={true}
        loop={true}
        slidesPerView={2}
        mousewheel={true}
        spaceBetween={-200}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[EffectCoverflow, Mousewheel, Pagination, Navigation]}
        className="h-[850px] relative w-full pt-28"
        onSlideChange={handleSlideChange}
      >
        {interns.map((intern, index) => (
          <SwiperSlide
            key={index}
            className="w-[35rem] h-full mx-auto flex justify-center bg-transparent"
          >
            <TransparentDiv
              index={index}
              activeCard={activeCard}
              title={intern.job}
              description={intern.description}
            ></TransparentDiv>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AcademyCard;
