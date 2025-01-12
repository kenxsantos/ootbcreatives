import ReadMoreReadLess from "../components/ReadMoreReadLess";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscMute, VscUnmute } from "react-icons/vsc";
import services from "../json/services.json";

const Landing = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen object-cover">
      <div className="relative mx-auto z-20 xs:px-3 xl:px-12 md:pb-12 flex flex-col items-left justify-center h-full">
        <div className="relative z-30 mb-6">
          <section className="mb-4 xs:pt-40 sm:pt-48 md:pt-52 xl:pt-20">
            <div>
              <img
                src="/assets/logo/OOTBLogoWhite.webp"
                alt="logo"
                className="xs:w-20 sm:w-32 md:w-44 mb-2"
              />
            </div>
            <div>
              <h2 className="flex flex-col leading-none text-left  text-white font-metropolis font-extrabold tracking-tighter xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl">
                <span>Let&apos;s skyrocket your</span>
                <span>business growth!</span>
              </h2>
            </div>
          </section>
          <section>
            <ReadMoreReadLess />
          </section>
        </div>
        <AnimatePresence>
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
        </AnimatePresence>

        <>
          <motion.div
            key="overlay3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full z-10 xs:bg-black xs:bg-opacity-70 xl:bg-opacity-0 xl:shadow-inner-overlay"
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
      </div>
    </div>
  );
};

export default Landing;
