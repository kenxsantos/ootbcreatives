import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
    <nav className="w-full top-0 z-50 bg-transparent">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-16 pt-4">
        <div className="flex items-center justify-between text-white font-jost text-md">
          <Link to="/">
            <img
              src="/assets/logo/OOTBLogoWhite.png"
              alt="logo"
              className="w-20 md:w-24"
            />
          </Link>

          <div className="xl:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? "" : <RxHamburgerMenu size={30} />}
            </button>
          </div>

          <div className="hidden xl:flex justify-center w-full">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to="#"
                onClick={() => handleLinkClick(link.id)}
              >
                <div className="flex flex-col items-center justify-center h-24 w-[120px]">
                  <div className="leading-none items-center">
                    <span className="transition-all duration-300 ease-in-out hover:text-glow hover:cursor-pointer">
                      {link.name}
                    </span>
                  </div>
                  {activeLink === link.id && (
                    <motion.img
                      src="/assets/others/lineflare.png"
                      alt="flare"
                      className="w-36 absolute mt-12"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 xl:hidden z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
          >
            <IoIosClose size={40} />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.id}
              to="#"
              onClick={() => handleLinkClick(link.id)}
              className="text-2xl font-jost text-white hover:text-glow transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
