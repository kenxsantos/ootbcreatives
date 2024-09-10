import ReadMoreReadLess from "../components/ReadMoreReadLess";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscMute, VscUnmute } from "react-icons/vsc";
import services from "../json/services.json";

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
    }, 3000);

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
          <section className="mb-4 xs:pt-40 sm:pt-48 md:pt-52 xl:pt-40">
            <div>
              <img
                src="/assets/logo/OOTBLogoWhite.webp"
                alt="logo"
                className="xs:w-20 sm:w-32 md:w-48 mb-2"
              />
            </div>
            <div>
              <h2 className="flex flex-col leading-none text-left  text-white font-metropolis font-extrabold tracking-tighter xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl">
                <span>BOLD IDEAS</span>
                <span>STELLAR RESULTS</span>
              </h2>
            </div>
          </section>
          <section>
            <ReadMoreReadLess />
          </section>
          {/* <section className="h-[80px]">
            <section>
              <div>
                <h1 className="font-jost text-white xs:text-xs sm:text-sm md:text-base 3xl:text-xl hover:cursor-pointer">
                  <span className="xs:mr-4 xl:mr-8">SERVICES</span>
                  <span>Let&apos;s discover how far your business can go!</span>
                </h1>
              </div>
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                {services.map((service) => (
                  <div className="relative border-white border-2 flex w-full xs:w-40 xs:h-32 sm:h-48 sm:w-64 md:w-72 lg:w-52 lg:h-40 xl:w-[270px] 2xl:h-48 2xl:w-72 3xl:w-[350px] 3xl:h-64 rounded-2xl p-4 items-end hover:cursor-pointer">
                    <img
                      src={service.thumbnail}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full z-0 rounded-2xl object-cover"
                    />
                    <h2 className="font-metropolis font-bold text-white flex flex-col leading-none z-10 text-sm sm:text-base md:text-lg lg:text-xl">
                      {service.title}
                      <br />
                      {service.subtitle}
                    </h2>
                    <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                  </div>
                ))}
              </div>
            </section>
          </section> */}
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
              className="absolute inset-0 w-full h-full z-10 xs:bg-black xs:bg-opacity-70 xl:bg-opacity-0 xl:shadow-inner-overlay object-cover"
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
        )}
      </div>
    </div>
  );
};

export default Landing;
