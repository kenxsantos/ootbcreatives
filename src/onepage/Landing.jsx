import ReadMoreReadLess from "../components/ReadMoreReadLess";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Landing = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-cover bg-indexbg">
      <AnimatePresence>
        {!showVideo ? (
          <motion.div
            key="image"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src="../../public/assets/ShadowOverlay2.png"
              alt="Shadow Overlay"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
          </motion.div>
        ) : (
          <motion.video
            key="video"
            src="../../public/assets/OOTBREEL2021.mp4"
            autoPlay
            loop
            muted
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        )}
      </AnimatePresence>
      <div className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none">
        <img
          src="../../public/assets/ShadowOverlay2.png"
          alt="Shadow Overlay"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto z-20">
        <div>
          <section className="mb-4">
            <h1 className="pt-[20rem] text-left text-[65px] leading-none text-white font-metropolis font-bold tracking-tighter">
              <span>BOLD IDEAS</span>
              <br />
              <span>STELLAR RESULTS</span>
            </h1>
          </section>
          <section>
            <ReadMoreReadLess />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Landing;
