import React from "react";
import { motion } from "framer-motion";
const ReadMoreButton = ({ isExpanded, handleToggle }) => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={handleToggle}
        id="myBtn"
        className="gap-1 inline-flex items-center rounded-full bg-orange-red px-2 py-1 px-3 text-base text-white font-jost"
      >
        <img src="/assets/others/staricon.webp" alt="star" className="w-2" />
        {isExpanded ? "READ LESS" : "READ MORE"}
      </motion.button>
    </div>
  );
};

export default ReadMoreButton;
