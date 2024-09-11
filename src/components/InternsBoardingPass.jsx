import React, { useState } from "react";
import TabComponent from "./TabComponent";
import { motion } from "framer-motion";
const InternsBoardingPass = ({ internData, yearData }) => {
  return (
    <div className="flex flex-col items-center xs:h-full w-full">
      <div className="w-[800px] sm:px-0">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src={internData.boardingPass}
          alt={internData.name}
          className="w-full object-cover"
        />
      </div>
      <div className="shadow-inner-crewmates rounded-t-3xl flex flex-col items-center h-[250px] xs:w-[400px] sm:w-[600px]">
        <TabComponent yearData={yearData} />
      </div>
    </div>
  );
};

export default InternsBoardingPass;
