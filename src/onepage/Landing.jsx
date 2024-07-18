import ReadMoreReadLess from "../components/ReadMoreReadLess";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Landing = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [bgClass, setBgClass] = useState("bg-indexbg");

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgClass("bg-black");
      setShowVideo(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative max-w-screen-2xl mx-auto bg-cover ${bgClass}`}>
      <div className="relative max-w-screen-2xl mx-auto z-20 p-12">
        <div className="relative z-30">
          <section className="mb-4">
            <h1 className="pt-[18rem] text-left text-[65px] leading-none text-white font-metropolis font-bold tracking-tighter">
              <span>BOLD IDEAS</span>
              <br />
              <span>STELLAR RESULTS</span>
            </h1>
          </section>
          <section>
            <ReadMoreReadLess />
          </section>
        </div>
        <AnimatePresence>
          {showVideo ? (
            <motion.video
              key="video"
              src="/assets/videos/OOTBREEL2021.mp4"
              autoPlay
              loop
              muted
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          ) : (
            <motion.img
              key="overlay2"
              src="/assets/others/ShadowOverlay2.png"
              alt="Shadow Overlay"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
          )}
        </AnimatePresence>
        {showVideo && (
          <motion.img
            key="overlay3"
            src="/assets/others/ShadowOverlay3.png"
            alt="Shadow Overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        )}
      </div>
    </div>
  );
};

export default Landing;
