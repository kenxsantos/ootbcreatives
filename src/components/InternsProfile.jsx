import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Mousewheel,
  Pagination,
  Navigation,
} from "swiper/modules";

const InternsProfile = ({ batches, year }) => {
  const [activeCard, setActiveCard] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveCard(swiper.realIndex);
  };

  const formattedName = (name) => {
    return name.toLowerCase().replace(/ /g, "-");
  };

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        direction="vertical"
        slidesPerView={3}
        mousewheel={true}
        spaceBetween={10}
        centeredSlides={true}
        speed={600}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 50,
          modifier: 4,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Mousewheel, Pagination, Navigation]}
        className="h-[700px] relative w-[650px] flex items-center mt-12 px-12 overflow-hidden "
        onSlideChange={handleSlideChange}
      >
        {Object.keys(batches).map((batch, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full mx-auto items-center flex  justify-center bg-transparent "
          >
            <motion.div
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.1 }}
              animate={{
                transition: { delay: 0.3, duration: 0.3, ease: "easeInOut" },
              }}
              className={`shadow-inner-crewmates  rounded-3xl flex flex-col justify-start h-60  p-4 xs:w-[380px] sm:w-[600px] ${
                index === activeCard ? "bg-gradient-red" : "bg-gradient-purple"
              }`}
            >
              <div key={index} className="w-full">
                <h2 className="text-white font-jost text-base mb-4 text-center uppercase">
                  {"Batch " + batch}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                  <AnimatePresence>
                    {Object.values(batches[batch])
                      .slice(0, index === activeCard ? undefined : 5)
                      .map((intern, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="w-20 h-20 flex object-cover"
                        >
                          <Link
                            to={`/ootb/academy/meet-the-interns/${year}/batch-${batch}/${formattedName(
                              intern.name
                            )}`}
                            state={{ batches, year }}
                          >
                            <motion.img
                              whileTap={{ scale: 1.1 }}
                              whileHover={{
                                scale: 1.1,
                                cursor: "pointer",
                                opacity: 1,
                              }}
                              src={intern.profile}
                              alt={intern.name}
                            />
                          </Link>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InternsProfile;
