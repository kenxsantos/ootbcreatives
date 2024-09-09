import CrewmatesCard from "../components/CrewmatesCard";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
const Crewmates = () => {
  const controls = useAnimation();

  return (
    <div className="bg-vertical-planets-2 h-screen mx-auto bg-cover flex flex-col justify-center">
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
