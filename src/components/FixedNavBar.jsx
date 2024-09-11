import { useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = ({ onNavLinkClick, activeLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "LANDING", id: "landing", slideIndex: 0 },
    { name: "SERVICES", id: "services", slideIndex: 1 },
    { name: "CLIENTS", id: "clients", slideIndex: 2 },
    { name: "CREWMATES", id: "crewmates", slideIndex: 3 },
    { name: "ACADEMY", id: "academy", slideIndex: 4 },
    { name: "CAREERS", id: "careers", slideIndex: 4 },
    { name: "RESOURCES", id: "resources", slideIndex: 4 },
    { name: "RADIO US", id: "radio", slideIndex: 5 },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    // Set the slideIndex to 0 for the "landing" slide
    onNavLinkClick(0);
  };

  return (
    <nav className="w-full left-0 top-0 overflow-visible z-[80] flex items-center">
      <div className="mx-auto">
        <div className="text-white flex justify-end font-jost text-md flex-col md:bg-transparent lg:px-12 w-screen">
          <div className="flex justify-between text-right 2xl:hidden px-2 py-4 items-center h-20">
            <div>
              <motion.img
                whileHover={{ cursor: "pointer", scale: 1.1 }}
                onClick={handleLogoClick}
                src="/assets/logo/OOTBLogoWhite.webp"
                alt="logo"
                className="w-16 xs:ml-2 xl:-ml-1"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            </div>
            <div>
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none flex justify-end"
              >
                {isMenuOpen ? "" : <RxHamburgerMenu className="w-8 h-8" />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 2xl:hidden z-40"
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
                <button
                  key={link.id}
                  onClick={() => {
                    onNavLinkClick(link.slideIndex);
                    closeMenu();
                  }}
                  className={`text-white transition-all font-jost duration-300 cursor-pointer hover:text-glow ${
                    link.name === "LANDING" ? "hidden" : "block"
                  } ${
                    activeLink === link.id ? "text-yellow-500" : "text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </motion.div>
          )}

          {/* Desktop Menu */}
          <div
            className={`${
              isMenuOpen
                ? "hidden"
                : "hidden 2xl:flex space-x-8 flex justify-center"
            } w-full `}
          >
            <div className="absolute top-4 left-16">
              <motion.img
                whileHover={{ cursor: "pointer", scale: 1.1 }}
                onClick={handleLogoClick}
                src="/assets/logo/OOTBLogoWhite.webp"
                alt="logo"
                className="w-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavLinkClick(link.slideIndex);
                }}
                className={`relative flex items-center justify-center p-8 h-12 mt-4 focus:outline-none mx-auto ${
                  link.name === "LANDING" ? "hidden" : "block"
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="hover:text-glow cursor-pointer"
                >
                  {link.name}
                </motion.span>
                {activeLink === link.id &&
                  activeLink !== "landing" &&
                  activeLink !== "academy" && (
                    <motion.img
                      src="/assets/others/lineflare.webp"
                      alt="flare"
                      className="w-28 md:w-44 absolute mt-12 md:mt-16"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    />
                  )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
