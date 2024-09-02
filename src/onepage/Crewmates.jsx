import CrewmatesCard from "../components/CrewmatesCard";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
const Crewmates = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        controls.start({ y: scrollY > 1700 ? 0 : -130 });
      } else if (screenWidth < 768) {
        controls.start({ y: scrollY > 2000 ? 0 : -130 });
      } else if (screenWidth < 1024) {
        controls.start({ y: scrollY > 2000 ? 0 : -130 });
      } else if (screenWidth < 1280) {
        controls.start({ y: scrollY > 1700 ? 0 : -150 });
      } else if (screenWidth < 1536) {
        controls.start({ y: scrollY > 1700 ? 0 : -150 });
      } else if (screenWidth < 1920) {
        controls.start({ y: scrollY > 1700 ? 0 : -150 });
      } else if (screenWidth < 2560) {
        controls.start({ y: scrollY > 2000 ? 0 : -230 });
      } else {
        controls.start({ y: scrollY > 2000 ? 0 : 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);
  return (
    <div className="bg-blurred-planets h-screen mx-auto bg-cover flex flex-col justify-center">
      <div className="w-full mx-auto pt-28">
        <motion.section
          animate={controls}
          transition={{ duration: 0.3 }}
          className="mx-auto text-center flex flex-col justify-center px-2"
        >
          <h1 className="font-metropolis text-white text-3xl font-bold mx-auto text-center 3xl:text-4xl">
            It&apos;s always a never ending fun journey with OOTB!
          </h1>
          <h2 className="text-white font-metropolis font-bold text-3xl 3xl:text-4xl">
            Meet our{" "}
            <span className="text-orange ">out-of-the-box witteam</span> and
            discover how far we can go.
          </h2>
        </motion.section>
        <section className="w-full">
          <CrewmatesCard />
        </section>
      </div>
    </div>
  );
};

export default Crewmates;
