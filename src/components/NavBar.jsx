import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const logoAnimation = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
        logoAnimation.start({
          scale: 0.3,
          opacity: 1,
          x: -65,
          y: -190,
          // Move the logo 50 pixels up
          transition: { duration: 0.5 },
        });
      } else {
        setIsScrolled(false);
        logoAnimation.start({
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0, // Reset the position
          transition: { duration: 0.5 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [logoAnimation]);

  return (
    <nav className="w-full fixed top-0 z-50 pt-8">
      <div className="mx-auto max-w-7xl  ">
        <div className="text-white flex justify-evenly items-center font-jost text-md">
          <section>SERVICES</section>
          <section className="flex flex-col leading-none">
            <span>CLIENTS</span>
            <span>ONBOARD</span>
            <img
              src="/public/assets/flare.png"
              alt=""
              srcset=""
              className="w-44 absolute left-[345px] top-[35px]"
            />
          </section>
          <section>CREWMATES</section>
          <section className="flex flex-col leading-none">
            <span>OOTB</span>
            <span>ACADEMY</span>
          </section>
          <section>CAREERS</section>
          <section>RESOURCES</section>
          <section>RADIO US</section>
        </div>
        <div className="mt-20">
          <motion.section
            className="w-48 h-48"
            animate={logoAnimation}
            initial={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src="../../public/assets/OOTBLogoWhite.png" alt="logo" />
          </motion.section>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
