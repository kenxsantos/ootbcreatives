import React from "react";
import { useParams } from "react-router-dom";
import crewmates from "../json/crewmates.json";
import { motion, useScroll, useSpring } from "framer-motion";

const CrewmatesDetails = ({ activeIndex }) => {
  const { id } = useParams(); // Extract id from URL params
  const crewmate = crewmates[activeIndex];
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="xl:w-4/5">
      <div className="xs:w-full md:flex relative box xs:h-full">
        <div className="xs:w-full md:w-1/5 xl:w-[30%] relative">
          <div className="absolute xs:w-[90px] xs:left-[280px] sm:left-[520px] xs:top-[25px] sm:top-[20px] md:left-[125px] md:top-[250px] md:w-[250px] lg:w-[320px] lg:left-[180px] md:top-[250px] lg:top-[180px] xl:w-[450px] xl:top-[150px] 2xl:w-[500px] 2xl:top-[100px] 2xl:left-[200px] 3xl:w-[600px] 3xl:left-[280px] 3xl:top-[0px] md:-translate-x-1/2">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              src={crewmate.astronaut}
              alt={crewmate.name}
              className="w-full"
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="xs:w-full m:w-4/5 xl:w-[70%] bg-red-500 bg-opacity-80 xs:rounded-t-[40px] md:rounded-tl-[80px] md:rounded-tr-none pt-12 px-12 xl:px-16 xs:h-[550px] md:h-[500px] xl:h-[600px] "
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-white xs:text-2xl xs:w-4/5 md:w-full sm:text-4xl xl:text-[40px] 2xl:text-5xl 3xl:text-6xl font-metropolis font-bold leading-none"
          >
            {crewmate.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="font-jost w-4/5 text-white xs:text-sm xl:text-base  2xl:text-xl 3xl:text-2xl uppercase mb-4"
          >
            {crewmate.position}
            {crewmate.title ? ` – ${crewmate.title}` : ""}
          </motion.p>
          <div
            className="md:pl-16 lg:pl-28 xl:pl-12 overflow-auto xs:h-[400px] md:h-[350px] xl:h-[400px] mb-4  hide-scrollbar "
            style={{ scaleX }}
          >
            {crewmate.description &&
              Object.values(crewmate.description).map((desc, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1.2, duration: 0.5 },
                  }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
                  className="font-jost text-white text-base text-justify mb-4 2xl:text-xl 3xl:text-xl"
                >
                  {desc}
                </motion.p>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CrewmatesDetails;
