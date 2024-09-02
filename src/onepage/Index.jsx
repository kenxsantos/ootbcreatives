import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Landing from "./Landing";
import NavBar from "../components/NavBar";
import Services from "./Services";
import Clients from "./Clients";
import { useAnimation, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Crewmates from "./Crewmates";
import Offers from "./Offers";
import RadioUs from "./RadioUs";
const Index = () => {
  const [activeLink, setActiveLink] = useState(null);
  const logoAnimation = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const windowWidth = window.innerWidth;
      let scale = 1;
      let x = 0;
      let y = 0;

      if (window.scrollY > 5) {
        if (windowWidth >= 1536) {
          scale = 0.5;
          x = -70;
          y = -350;
        } else if (windowWidth >= 1280) {
          scale = 0.5;
          x = -90;
          y = -150;
        } else if (windowWidth >= 1024) {
          scale = 0.6;
          x = -50;
          y = -350;
        } else if (windowWidth >= 768) {
          scale = 0.6;
          x = -55;
          y = -450;
        } else if (windowWidth >= 640) {
          scale = 0.7;
          x = -30;
          y = -300;
        } else if (windowWidth >= 390) {
          scale = 0.8;
          x = -10;
          y = -300;
        } else {
          scale = 0.9;
          x = -10;
          y = -20;
        }

        document.getElementById(
          "logo"
        ).style.transform = `scale(${scale}) translate(${x}px, ${y}px)`;
        document.getElementById("logo").style.transition =
          "transform 0.3s ease";
      } else {
        document.getElementById("logo").style.transform =
          "scale(1) translate(0px, 0px)";
        document.getElementById("logo").style.transition =
          "transform 0.5s ease";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActiveLink = (id) => {
    setActiveLink(id);
    if (id !== "landing") {
      logoAnimation.start({
        scale: 0.5,
        opacity: 1,
        x: -40,
        y: -130,
        transition: { duration: 0.1 },
      });
    }
  };

  return (
    <div className="relative w-screen-2xl">
      <div
        className="z-[90] xs:ml-4 fixed xs:mt-60 sm:mt-52 md:mt-64 md:ml-12 lg:mt-48 xl:mt-20 xl:ml-10 2xl:mt-40 cursor-pointer"
        id="logo"
        initial={{ scale: 1, opacity: 1 }}
      >
        <ScrollLink
          to="landing"
          smooth={true}
          duration={800}
          offset={0}
          onSetActive={() => handleSetActiveLink("landing")}
        >
          <img
            src="/assets/logo/OOTBLogoWhite.png"
            alt="logo"
            className="xs:w-20 sm:w-32 md:w-44 md:-ml-8 xl:ml-4"
          />
        </ScrollLink>
      </div>

      <NavBar setActiveLink={handleSetActiveLink} />

      <div id="landing">
        <Landing />
      </div>
      <div id="services" className="relative z-30">
        <Services />
      </div>
      <div id="clients" className="relative z-40">
        <Clients />
      </div>
      <div id="crewmates" className="relative z-50">
        <Crewmates />
      </div>
      <div id="academy" className="relative z-[60]">
        <div id="careers"></div>
        <div id="resources"></div>
        <Offers />
      </div>
      <div id="radio" className="relative z-[70]">
        <RadioUs />
      </div>
    </div>
  );
};

export default Index;
