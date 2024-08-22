import ReadMoreReadLess from "../components/ReadMoreReadLess";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscMute, VscUnmute } from "react-icons/vsc";

const Landing = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [bgClass, setBgClass] = useState("bg-rocket");
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
    <div
      className={`relative max-w-screen-2xl mx-auto bg-cover h-full ${bgClass}`}
    >
      <div className="relative max-w-screen-2xl mx-auto z-20  xs:px-4 md:px-12 md:pb-12 h-full ">
        <div className="relative z-30 mb-12 ">
          <section className="mb-4">
            <h1 className="xs:mt-44 md:mt-60 text-left xs:text-2xl sm:text-4xl md:text-5xl h-full flex flex-col leading-none text-white font-metropolis font-extrabold tracking-tighter">
              <span>BOLD IDEAS</span>
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
              src="/assets/videos/OOTBWEBSITEOPENING.mp4"
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
          <>
            <motion.div
              key="overlay3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full z-10 shadow-inner-overlay"
            />
            <motion.button
              onClick={toggleMute}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-20 right-4 z-40 p-2 text-white rounded-full"
            >
              {isMuted ? <VscMute size={24} /> : <VscUnmute size={24} />}
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
