import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const blurAnimation = useAnimation();
  const [activeLink, setActiveLink] = useState("landing");
  const [isScrolling, setIsScrolling] = useState(false);

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
        className="mx-auto max-w-screen-2xl px-12 h-24"
        animate={blurAnimation}
        initial={{ backdropFilter: "blur(0px)" }}
      >
        <div className="text-white flex items-center justify-evenly font-jost text-md px-24">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              duration={800}
              offset={0}
              onSetActive={() => setActiveLink(link.id)}
              className="relative flex  items-center justify-evenly h-24 w-[150px] cursor-pointer"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="hover:text-glow "
              >
                {link.name}
              </motion.span>
              {activeLink === link.id &&
                activeLink !== "landing" &&
                activeLink !== "academy" && (
                  <motion.img
                    src="/assets/others/lineflare.png"
                    alt="flare"
                    className="w-44 absolute mt-12"
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
      </motion.div>
    </nav>
  );
};

export default NavBar;
