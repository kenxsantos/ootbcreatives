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

  return (
    <nav className="w-full fixed top-0 h-28 overflow-visible z-[80]">
      <motion.div
        className="mx-auto max-w-screen-2xl md:px-12 h-24 "
        animate={blurAnimation}
        initial={{ backdropFilter: "blur(0px)" }}
      >
        <div
          className={`${
            isMenuOpen ? "xs:bg-gradient-navbar" : "bg-transparent"
          } text-white flex justify-end font-jost text-md flex-col md:bg-transparent`}
        >
          <div className="flex justify-end text-right md:hidden border p-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none flex justify-end"
            >
              {isMenuOpen ? (
                <IoIosClose className="w-8 h-8" />
              ) : (
                <RxHamburgerMenu className="w-8 h-8" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex  md:w-auto  md:justify-center`}
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
                className="relative flex items-center justify-end h-12 md:h-24 md:w-[150px] cursor-pointer mt-4 md:mt-0 xs:px-12"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="hover:text-glow"
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
      </motion.div>
    </nav>
  );
};

export default NavBar;
