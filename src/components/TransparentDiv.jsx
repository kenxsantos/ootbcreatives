import React from "react";
import { motion } from "framer-motion";
const TransparentDiv = ({ title, description, index, width }) => {
  return (
    <motion.div
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 1.1, cursor: "pointer" }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="shadow-inner-crewmates rounded-3xl flex flex-col justify-start h-60 -mb-16 w-[600px] "
      style={{ width: `${width + index * 20}px` }}
    >
      <div className="p-10">
        <h1 className="text-3xl font-extrabold mb-2 font-metropolis text-white text-glow uppercase">
          {title}
        </h1>
        <p className="text-base font-jost text-white">{description}</p>
      </div>
    </motion.div>
  );
};

export default TransparentDiv;
