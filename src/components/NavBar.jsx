import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const logoAnimation = useAnimation();
  const [activeLink, setActiveLink] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        logoAnimation.start({
          scale: 0.5,
          opacity: 1,
          x: -40,
          y: -170,
          // Move the logo 50 pixels up
          transition: { duration: 0.3 },
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

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const navLinks = [
    { name: "SERVICES", id: "SERVICES" },
    { name: "CLIENTS", id: "CLIENTS", sub: "ONBOARD" },
    { name: "CREWMATES", id: "CREWMATES" },
    { name: "OOTB", id: "OOTBACADEMY", sub: "ACADEMY" },
    { name: "CAREERS", id: "CAREERS" },
    { name: "RESOURCES", id: "RESOURCES" },
    { name: "RADIO US", id: "RADIO US" },
  ];
  return (
    <nav className="w-full fixed top-0 z-50 pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-white flex items-center justify-evenly font-jost text-md px-24">
          {navLinks.map((link) => (
            <Link key={link.id} to="#" onClick={() => handleLinkClick(link.id)}>
              <section className="flex flex-col items-center justify-center h-24 w-[150px]">
                <section className="flex flex-col leading-none items-center">
                  <span>{link.name}</span>
                  {link.sub && <span>{link.sub}</span>}
                </section>
                {activeLink === link.id && (
                  <motion.img
                    src="/public/assets/lineflare.png"
                    alt="flare"
                    className="w-44 ml-2 absolute mt-16"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </section>
            </Link>
          ))}
        </div>
        <div className="mt-8">
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
