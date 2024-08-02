import React from "react";
import { motion } from "framer-motion";
const GlowDiv = ({ children, index }) => {
  const cardAnimation = {
    hidden: {
      rotate: 0,
    },
    visible: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: (i) => i * 0.5, // Stagger the animations
      },
    },
  };

  return (
    <motion.div
      className="relative w-[190px] h-[254px] bg-[#07182E] rounded-lg flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={cardAnimation}
      custom={index}
    >
      <h2 className="z-10 text-white text-2xl">CARD</h2>
      <motion.div
        className="absolute inset-0 bg-[#07182E] rounded-lg"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-1/2 h-full bg-gradient-to-b from-[#00B7FF] to-[#FF30FF]"
        style={{ transformOrigin: "center" }}
      />
    </motion.div>
  );
};

export default GlowDiv;
