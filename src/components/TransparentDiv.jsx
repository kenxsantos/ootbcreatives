import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TransparentDiv = ({ title, description, index }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isXsScreen = width < 640;
  const divWidth = isXsScreen ? 300 : 530;

  return (
    <motion.div
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 1.1, cursor: "pointer" }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="shadow-inner-crewmates rounded-3xl flex flex-col justify-start h-60 -mb-16"
      style={{ width: `${divWidth + index * 20}px` }}
    >
      <div className="xs:p-4 sm:p-10">
        <h1 className="xs:text-2xl sm:text-3xl font-extrabold mb-2 font-metropolis text-white text-glow uppercase">
          {title}
        </h1>
        <p className="text-base font-jost text-white">
          {description.length > 80
            ? `${description.slice(0, 80)}...`
            : description}
        </p>
      </div>
    </motion.div>
  );
};

export default TransparentDiv;
