import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import crewmates from "../json/crewmates.json";
const CrewmatesDetails = ({ activeIndex }) => {
  const { id } = useParams(); // Extract id from URL params
  const crewmate = crewmates[activeIndex];
  return (
    <div className="w-4/5 flex relative box">
      <div className="w-1/4 relative">
        <div className="absolute bottom-0 left-[150px] w-[500px] -translate-x-1/2">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={crewmate.astronaut}
            alt={crewmate.name}
            className="w-full"
          />
        </div>
      </div>
      <div className="w-3/4 bg-red-400 rounded-tl-[80px] pt-12 pl-20 pr-12 h-full">
        <h1 className="text-white text-[40px] font-metropolis font-bold leading-none">
          {crewmate.name}
        </h1>
        <h2 className="font-jost text-white text-base uppercase mb-4">
          {crewmate.position} - {crewmate.title}
        </h2>
        {crewmate.description &&
          Object.values(crewmate.description).map((desc, index) => (
            <p
              key={index}
              className="font-jost text-white text-base text-justify mb-4 ml-10"
            >
              {desc}
            </p>
          ))}
      </div>
    </div>
  );
};

export default CrewmatesDetails;
