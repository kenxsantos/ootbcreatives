import ReadMoreReadLess from "../components/ReadMoreReadLess";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Landing = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [bgClass, setBgClass] = useState("bg-indexbg");
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBgClass("bg-black");
      setShowVideo(true);
    }, 5000);

    const handleScroll = () => {
      if (videoRef.current) {
        const videoTop = videoRef.current.getBoundingClientRect().top;
        if (videoTop < 0 || videoTop > window.innerHeight) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`relative max-w-screen-2xl mx-auto bg-cover ${bgClass}`}>
      <div className="relative max-w-screen-2xl mx-auto z-20 p-12">
        <div className="relative z-30">
          <section className="mb-4">
            <h1 className="pt-60 text-left text-[65px] leading-none text-white font-metropolis font-bold tracking-tighter">
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
              ref={videoRef}
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
            <motion.div
              key="overlay2"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full z-10 shadow-inner-overlay"
            />
          )}
        </AnimatePresence>
        {showVideo && (
          <motion.div
            key="overlay3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full z-10 shadow-inner-overlay"
          />
        )}
      </div>
    </div>
  );
};

export default Landing;
