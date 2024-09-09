import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Landing from "./Landing";
import NavBar from "../components/NavBar";
import Services from "./Services";
import Clients from "./Clients";
import Crewmates from "./Crewmates";
import Offers from "./Offers";
import RadioUs from "./RadioUs";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";

const Index = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeLink, setActiveLink] = useState("landing");

  const navLinks = [
    { name: "LANDING", id: "landing", slideIndex: 0 },
    { name: "SERVICES", id: "services", slideIndex: 1 },
    { name: "CLIENTS", id: "clients", slideIndex: 2 },
    { name: "CREWMATES", id: "crewmates", slideIndex: 3 },
    { name: "ACADEMY", id: "academy", slideIndex: 4 },
    { name: "RADIO US", id: "radio", slideIndex: 5 },
  ];

  const handleNavLinkClick = (slideIndex) => {
    if (swiperInstance) {
      swiperInstance.slideTo(slideIndex);
    }
  };

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        const activeSlide = swiperInstance.activeIndex;
        const activeNavLink = navLinks.find(
          (link) => link.slideIndex === activeSlide
        );
        if (activeNavLink) {
          setActiveLink(activeNavLink.id);
        }
      });
    }
  }, [swiperInstance]);

  return (
    <div className="relative max-w-screen-3xl mx-auto">
      <NavBar onNavLinkClick={handleNavLinkClick} activeLink={activeLink} />

      <Swiper
        onSwiper={setSwiperInstance}
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        spaceBetween={0}
        modules={[Mousewheel, Pagination, Navigation]}
        className="h-screen w-full"
      >
        <SwiperSlide>
          <div id="landing">
            <Landing />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="services" className="relative z-30">
            <Services />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="clients" className="relative z-40">
            <Clients />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="crewmates" className="relative z-50">
            <Crewmates />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="academy" className="relative z-[60]">
            <div id="careers"></div>
            <div id="resources"></div>
            <Offers />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="radio" className="relative z-[70]">
            <RadioUs />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Index;
