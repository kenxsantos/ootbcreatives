import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import crewmates from "../json/crewmates.json";
const CrewmatesDetails = ({ activeIndex }) => {
  const { id } = useParams(); // Extract id from URL params
  const crewmate = crewmates[activeIndex];
  const sentenceVariants = {};
  return (
    <div className="w-4/5 flex relative box">
      <div className="w-1/5 relative">
        <div className="absolute bottom-0 left-[150px] w-[400px] -translate-x-1/2">
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
        className="w-4/5 bg-red-500 bg-opacity-80 rounded-tl-[80px] pt-12 pl-20 pr-12 h-full"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-white text-[40px] font-metropolis font-bold leading-none"
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
          className="font-jost text-white text-base uppercase mb-4"
        >
          {crewmate.position}
          {crewmate.title ? ` – ${crewmate.title}` : ""}
        </motion.p>
        <div className="pl-12 overflow-auto h-[300px] hide-scrollbar">
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
                className="font-jost text-white text-base text-justify mb-4"
              >
                {desc}
              </motion.p>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CrewmatesDetails;
