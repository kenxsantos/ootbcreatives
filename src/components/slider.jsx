import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import slide_image_1 from "../../public/assets/astronauts/AndreKirbyAquino.png";
import slide_image_2 from "../../public/assets/astronauts/AndreKirbyAquino.png";
import slide_image_3 from "../../public/assets/astronauts/AndreKirbyAquino.png";
import slide_image_4 from "../../public/assets/astronauts/AndreKirbyAquino.png";
import slide_image_5 from "../../public/assets/astronauts/AndreKirbyAquino.png";
import slide_image_6 from "../../public/assets/astronauts/AndreKirbyAquino.png";
import slide_image_7 from "../../public/assets/astronauts/AndreKirbyAquino.png";

function CrewmatesCard() {
  return (
    <div className="max-w-screen-2xl p-16 mx-auto">
      <h1 className="py-4 text-5xl text-center">Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-[52rem] py-8 relative swiper_container"
      >
        <SwiperSlide className="w-[37rem] h-[42rem] relative">
          <img
            src={slide_image_1}
            alt="slide_image"
            className="w-[37rem] h-[42rem] rounded-2xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] h-[42rem] relative">
          <img
            src={slide_image_2}
            alt="slide_image"
            className="w-[37rem] h-[42rem] rounded-2xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] h-[42rem] relative">
          <img
            src={slide_image_3}
            alt="slide_image"
            className="w-[37rem] h-[42rem] rounded-2xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] h-[42rem] relative">
          <img
            src={slide_image_4}
            alt="slide_image"
            className="w-[37rem] h-[42rem] rounded-2xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] h-[42rem] relative">
          <img
            src={slide_image_5}
            alt="slide_image"
            className="w-[37rem] h-[42rem] rounded-2xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] h-[42rem] relative">
          <img
            src={slide_image_6}
            alt="slide_image"
            className="w-[37rem] h-[42rem] rounded-2xl object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[37rem] h-[42rem] relative">
          <img
            src={slide_image_7}
            alt="slide_image"
            className="w-[37rem] h-[42rem] rounded-2xl object-cover"
          />
        </SwiperSlide>

        <div className="relative bottom-8 flex items-center justify-center slider-controler">
          <div className="swiper-button-prev slider-arrow bg-white w-[3.5rem] h-[3.5rem] rounded-full left-[30%] transform translate-x-[-30%] md:left-[20%] md:translate-x-[-20%] lg:left-[42%] lg:translate-x-[-42%]">
            <ion-icon
              name="arrow-back-outline"
              className="text-2xl text-[#222224]"
            ></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow bg-white w-[3.5rem] h-[3.5rem] rounded-full left-[70%] transform translate-x-[-70%] md:left-[80%] md:translate-x-[-80%] lg:left-[58%] lg:translate-x-[-58%]">
            <ion-icon
              name="arrow-forward-outline"
              className="text-2xl text-[#222224]"
            ></ion-icon>
          </div>
          <div className="swiper-pagination relative w-[15rem] bottom-4"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default CrewmatesCard;
