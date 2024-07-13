import ReadMoreReadLess from "../components/ReadMoreReadLess";
import React, { useState, useEffect, useRef } from "react";

const Landing = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(videoRef.current);

      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }
  }, [showVideo]);
  return (
    <div className="relative">
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          showVideo ? "opacity-0" : "opacity-100"
        } bg-cover xl:h-full 2xl:h-screen bg-indexbg`}
      >
        <img
          src="/assets/ShadowOverlay2.png"
          alt="Shadow Overlay"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>
      <div
        className={`absolute inset-0 items-center text-right w-full border transition-opacity duration-1000 ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
      >
        {showVideo && (
          <video
            className="absolute right-0 w-full h-full object-cover z-0 xl:h-full 2xl:h-screen"
            autoPlay
            loop
            ref={videoRef}
          >
            <source src="/assets/OOTBREEL2021.mp4" type="video/mp4" />
          </video>
        )}
        <img
          src="/assets/ShadowOverlay2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none xl:h-full 2xl:h-screen "
          style={{ opacity: 1 }}
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
