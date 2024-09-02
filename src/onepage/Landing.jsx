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
    <div className={`relative h-screen object-cover ${bgClass}`}>
      <div className="relative mx-auto z-20 xs:px-3 xl:px-12 md:pb-12 flex flex-col items-left justify-center h-full">
        <div className="relative z-30 mb-6">
          <section className="mb-4 xs:pt-40 sm:pt-48 md:pt-52 xl:pt-60">
            <h2 className="flex flex-col leading-none text-left  text-white font-metropolis font-extrabold tracking-tighter xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl">
              <span>BOLD IDEAS</span>
              <span>STELLAR RESULTS</span>
            </h2>
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
              className="absolute inset-0 w-full h-full z-10 shadow-inner-overlay object-cover"
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
              className="absolute inset-0 w-full h-full z-10 xs:bg-black xs:bg-opacity-70  xl:shadow-inner-overlay"
            />
            <motion.button
              onClick={toggleMute}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-10 right-10 z-40 p-2 text-white rounded-full"
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
