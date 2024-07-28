import { useState } from "react";
import { Link } from "react-router-dom";
import ReadMoreButton from "./ReadMoreButton";
import crewmates from "../json/crewmates.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const CrewmatesCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-screen-2xl ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        centerInsufficientSlides={true}
        slideToClickedSlide={true}
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
        className="h-full py-8 relative"
      >
        {crewmates.map((crewmate, index) => (
          <SwiperSlide className="w-[25rem] h-full  mx-auto ">
            <section key={index} className="rounded-2xl bg-purple px-6 py-8">
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
                  <Link to={`/crewmates/${crewmate.link}`} key={index}>
                    <ReadMoreButton
                      isExpanded={isExpanded}
                      handleToggle={handleToggle}
                    />
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
            </section>
          </SwiperSlide>
        ))}

        <div className="relative bottom-8 flex items-center justify-center slider-controler mt-16">
          <div className="swiper-button-prev slider-arrow bg-white w-[3.5rem] h-[3.5rem] rounded-full left-[30%] transform translate-x-[-30%] md:left-[20%] md:translate-x-[-20%] lg:left-[42%] lg:translate-x-[-42%]">
            <ion-icon
              name="arrow-back-outline border "
              className="text-2xl text-[#222224]"
            ></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow bg-white w-[3.5rem] h-[3.5rem] rounded-full left-[70%] transform translate-x-[-70%] md:left-[80%] md:translate-x-[-80%] lg:left-[58%] lg:translate-x-[-58%]">
            <ion-icon
              name="arrow-forward-outline border"
              className="text-2xl text-[#222224]"
            ></ion-icon>
          </div>
          <div className="swiper-pagination relative w-[15rem] bottom-4"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default CrewmatesCard;
