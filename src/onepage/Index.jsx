import React, { useState, useEffect, useRef } from "react";
import Landing from "./Landing";
import NavBar from "../components/NavBar";
import Services from "./Services";
import Clients from "./Clients";
import Crewmates from "./Crewmates";
import Offers from "./Offers";
import RadioUs from "./RadioUs";

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideContainerRef = useRef(null);

  const slides = [
    { id: "landing", component: <Landing /> },
    { id: "services", component: <Services /> },
    { id: "clients", component: <Clients /> },
    { id: "crewmates", component: <Crewmates /> },
    { id: "academy", component: <Offers /> },
    { id: "radio", component: <RadioUs /> },
  ];

  const scrollToSlide = (index) => {
    if (slideContainerRef.current && index >= 0 && index < slides.length) {
      const slideHeight = window.innerHeight;
      slideContainerRef.current.style.transform = `translateY(-${
        index * slideHeight
      }px)`;
      setActiveSlide(index);
    }
  };

  const handleScroll = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      // Scroll down
      scrollToSlide(activeSlide + 1);
    } else if (e.deltaY < 0) {
      // Scroll up
      scrollToSlide(activeSlide - 1);
    }
  };

  useEffect(() => {
    const container = slideContainerRef.current;

    // Add event listener for mousewheel scrolling
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSlide]);

  return (
    <div className="relative max-w-screen-3xl mx-auto overflow-hidden">
      <NavBar
        onNavLinkClick={(index) => scrollToSlide(index)}
        activeLink={slides[activeSlide].id}
      />
      <div
        ref={slideContainerRef}
        className="transition-transform duration-500 ease-in-out h-screen"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="h-screen w-full">
            {slide.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
