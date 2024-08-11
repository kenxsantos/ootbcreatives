import React, { useState } from "react";
import TabComponent from "./TabComponent";
import { motion } from "framer-motion";
const InternsBoardingPass = ({ internData, yearData }) => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden h-full">
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src={internData.image}
          alt={internData.name}
          className="w-full"
        />
      </div>
      <div className="shadow-inner-crewmates rounded-t-3xl flex flex-col  h-[250px] w-[600px]">
        <TabComponent yearData={yearData} />
      </div>
    </div>
  );
};

export default InternsBoardingPass;
