import { useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

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

  return (
    <nav className="w-full fixed left-0 top-0 overflow-visible z-[80]">
      <div className="mx-auto max-w-screen-2xl md:px-12">
        <div className="text-white flex justify-end font-jost text-md flex-col md:bg-transparent">
          {/* Mobile Menu Toggle */}
          <div className="flex justify-end text-right 2xl:hidden p-4">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none flex justify-end"
            >
              {isMenuOpen ? "" : <RxHamburgerMenu className="w-8 h-8" />}
            </button>
          </div>

          {/* Mobile Menu */}
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
                  className={`text-white transition-all font-jost duration-300 cursor-pointer  ${
                    link.name === "LANDING" ? "hidden" : "block"
                  } ${
                    activeLink === link.id
                      ? "text-[#F38920]"
                      : "hover:text-glow"
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
              isMenuOpen ? "hidden" : "hidden 2xl:flex space-x-8"
            } w-full md:justify-center`}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavLinkClick(link.slideIndex);
                }}
                className={`relative flex items-center justify-center p-8 h-12 mt-4 focus:outline-none ${
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
                      src="/assets/others/lineflare.png"
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
