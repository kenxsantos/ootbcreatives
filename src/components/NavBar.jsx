import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {
  const blurAnimation = useAnimation();
  const [activeLink, setActiveLink] = useState("landing");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "LANDING", id: "landing" },
    { name: "SERVICES", id: "services" },
    { name: "CLIENTS", id: "clients" },
    { name: "CREWMATES", id: "crewmates" },
    { name: "ACADEMY", id: "academy" },
    { name: "CAREERS", id: "careers" },
    { name: "RESOURCES", id: "resources" },
    { name: "RADIO US", id: "radio" },
  ];

  useEffect(() => {
    let scrollTimer = null;

    const handleScroll = () => {
      setIsScrolling(true);
      blurAnimation.start({
        backdropFilter: "blur(5px)",
        transition: { duration: 0.01 },
      });

      if (scrollTimer !== null) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
        blurAnimation.start({
          backdropFilter: "blur(0px)",
          transition: { duration: 0.5 },
        });
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [blurAnimation]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full fixed left-0 top-0 h-28 overflow-visible z-[80]">
      <div className="mx-auto max-w-screen-2xl md:px-12 h-24">
        <div className="text-white flex justify-end font-jost text-md flex-col md:bg-transparent">
          <div className="flex justify-end text-right 2xl:hidden p-4">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none flex justify-end"
            >
              {isMenuOpen ? "" : <RxHamburgerMenu className="w-8 h-8" />}
            </button>
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
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={0}
                  onSetActive={() => setActiveLink(link.id)}
                  onClick={closeMenu} // Close the menu after clicking a link
                  className={`text-2xl text-white hover:text-glow transition-all duration-300 cursor-pointer ${
                    link.name === "LANDING" ? "hidden" : "block"
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </motion.div>
          )}

          <div
            className={`${
              isMenuOpen ? "hidden" : "hidden 2xl:flex space-x-8"
            } w-full md:justify-center`}
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                duration={800}
                offset={0}
                onSetActive={() => setActiveLink(link.id)}
                className={`relative flex items-center justify-center p-8 h-12 mt-4 ${
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
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
