import React from "react";
import { motion } from "framer-motion";
const TransparentDiv = ({ title, description, activeCard, index }) => {
  return (
    <motion.iv
      className="shadow-inner-crewmates rounded-3xl  h-96 flex flex-col justify-start"
      animate={{
        scale: index === activeCard ? 1.2 : 1,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <div className="p-12">
        <h1 className="text-3xl font-bold mb-2 font-metropolis text-white text-glow uppercase">
          {title}
        </h1>
        <p className="text-base font-jost text-white">{description}</p>
      </div>
    </motion.iv>
  );
};

export default TransparentDiv;
