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
          y: -145,
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
    <div className="relative max-w-screen-2xl mx-auto">
      <motion.div
        className="z-50 fixed ml-12 mt-28 cursor-pointer"
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
            className="w-48"
          />
        </ScrollLink>
      </motion.div>
      <NavBar setActiveLink={handleSetActiveLink} />
      <div id="landing">
        <Landing />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <div id="crewmates">
        <Crewmates />
      </div>
      <div id="offers">
        <Offers />
      </div>
      <div id="radio-us">
        <RadioUs />
      </div>
    </div>
  );
};

export default Index;
