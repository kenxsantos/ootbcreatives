import React, { useState, useEffect } from "react";
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
      if (window.scrollY > 5) {
        logoAnimation.start({
          scale: 0.5,
          opacity: 1,
          x: -40,
          y: -100,
          transition: { duration: 0.3 },
        });
      } else {
        logoAnimation.start({
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [logoAnimation]);

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
    <div className="relative w-screen mx-auto">
      <motion.div
        className="z-[80] fixed xs:ml-4 xs:mt-20 md:ml-12 md:mt-20 cursor-pointer"
        animate={logoAnimation}
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
      </motion.div>

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
