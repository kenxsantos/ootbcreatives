import React, { useState, useEffect, useCallback } from "react";
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
import Service from "./Service";

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

  const handleNavLinkClick = useCallback(
    (slideIndex) => {
      if (swiperInstance) {
        swiperInstance.slideTo(slideIndex);
      }
    },
    [swiperInstance]
  );

  useEffect(() => {
    if (swiperInstance) {
      const onSlideChange = () => {
        const activeSlide = swiperInstance.activeIndex;
        const activeNavLink = navLinks.find(
          (link) => link.slideIndex === activeSlide
        );
        if (activeNavLink) {
          setActiveLink(activeNavLink.id);
        }
      };

      swiperInstance.on("slideChange", onSlideChange);

      // Cleanup event listener when swiperInstance changes or component unmounts
      return () => {
        swiperInstance.off("slideChange", onSlideChange);
      };
    }
  }, [swiperInstance, navLinks]);

  return (
    <div className="relative max-w-screen-3xl mx-auto">
      <NavBar onNavLinkClick={handleNavLinkClick} activeLink={activeLink} />
      <Swiper
        onSwiper={setSwiperInstance}
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
          thresholdDelta: 50,
        }}
        lazy="true"
        spaceBetween={0}
        modules={[Mousewheel, Pagination, Navigation]}
        className="h-screen w-full"
        speed={400}
      >
        <SwiperSlide>
          <div id="landing" className="h-full w-full">
            <Landing />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="services" className="h-full w-full relative z-30">
            <Service />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="clients" className="h-full w-full relative z-40">
            <Clients />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="crewmates" className="h-full w-full relative z-50">
            <Crewmates />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="academy" className="h-full w-full relative z-[60]">
            <div id="careers"></div>
            <div id="resources"></div>
            <Offers />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="radio" className="h-full w-full relative z-[70]">
            <RadioUs />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Index;
