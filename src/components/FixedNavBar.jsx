import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
const NavBar = () => {
  const logoAnimation = useAnimation();
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const navLinks = [
    { name: "SERVICES", id: "SERVICES" },
    { name: "CLIENTS", id: "CLIENTS" },
    { name: "CREWMATES", id: "CREWMATES" },
    { name: "ACADEMY", id: "ACADEMY" },
    { name: "CAREERS", id: "CAREERS" },
    { name: "RESOURCES", id: "RESOURCES" },
    { name: "RADIO US", id: "RADIO US" },
  ];
  return (
    <nav className="w-full top-0 z-50 ">
      <div className="mx-auto max-w-screen-2xl px-16 pt-4">
        <div className="text-white flex items-center font-jost text-md">
          <div>
            <Link to="/">
              <img
                src="/assets/OOTBLogoWhite.png"
                alt="logo"
                className="w-24 mr-16"
              />
            </Link>
          </div>
          {navLinks.map((link) => (
            <Link key={link.id} to="#" onClick={() => handleLinkClick(link.id)}>
              <section className="flex flex-col items-center justify-center h-24 w-[150px]">
                <section className="flex flex-col leading-none items-center">
                  <span className="transition-all duration-300 ease-in-out  hover:text-glow hover:cursor-pointer">
                    {link.name}
                  </span>
                  {link.sub && <span>{link.sub}</span>}
                </section>
                {activeLink === link.id && (
                  <motion.img
                    src="/assets/lineflare.png"
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
      </div>
    </nav>
  );
};

export default NavBar;
