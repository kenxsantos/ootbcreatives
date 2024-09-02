import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";

const TabComponent = ({ yearData }) => {
  const [activeTab, setActiveTab] = useState("1");
  const { batch, intern } = useParams();
  const swiperRef = useRef(null);
  const batchKey = batch?.replace("batch-", "") || "1";

  useEffect(() => {
    if (batch && yearData.batch[batchKey]) {
      setActiveTab(batchKey);
    }
  }, [batch, yearData.batch, batchKey]);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      const updateArrowVisibility = () => {
        swiper.navigation.update();
      };

      swiper.on("slideChange", updateArrowVisibility);
      updateArrowVisibility();

      return () => {
        swiper.off("slideChange", updateArrowVisibility);
      };
    }
  }, []);

  const handleTabChange = (batchIndex) => {
    setActiveTab(batchIndex);
  };

  const formattedName = (name) => name.toLowerCase().replace(/ /g, "-");

  const initialSlideIndex = Object.keys(
    yearData.batch[activeTab] || {}
  ).findIndex(
    (internIndex) =>
      formattedName(yearData.batch[activeTab][internIndex].name) === intern
  );

  return (
    <div className="relative flex flex-col w-full rounded-t-3xl xs:px-4 sm:px-12 items-center justify-center h-full">
      <div className="relative flex flex-col w-full h-full ">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={5}
          mousewheel
          speed={300}
          slidesPerGroup={3}
          centerInsufficientSlides={true}
          initialSlide={initialSlideIndex >= 0 ? initialSlideIndex : 0}
          className="w-full h-full py-2 mt-6"
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Mousewheel, Pagination, Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {Object.keys(yearData.batch[activeTab] || {}).map((internIndex) => {
            const internData = yearData.batch[activeTab][internIndex];
            const isSelected = intern === formattedName(internData.name);

            return (
              <SwiperSlide
                key={internIndex}
                className="flex items-center justify-center xs:w-16 h-[64px] sm:w-24 sm:h-[85px] cursor-pointer mb-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-full h-full ${
                    isSelected ? "border-2 border-orange" : "border-none"
                  }`}
                >
                  <Link
                    href={`/ootb/academy/meet-the-interns/${
                      yearData.year
                    }/batch-${activeTab}/${formattedName(internData.name)}`}
                  >
                    <img
                      src={internData.profile}
                      alt={internData.name}
                      className={`w-full h-full object-cover ${
                        isSelected ? "opacity-100" : "opacity-50"
                      }`}
                    />
                  </Link>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="relative flex flex-col w-full h-full mt-4 p-2 overflow-hidden items-center justify-center">
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          mousewheel
          speed={400}
          slidesPerGroup={2}
          centerInsufficientSlides={true}
          initialSlide={batchKey - 1}
          className="w-full h-full"
          modules={[Mousewheel, Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {Object.keys(yearData.batch).map((batchIndex) => (
            <SwiperSlide
              key={batchIndex}
              onClick={() => handleTabChange(batchIndex)}
              className="flex items-center justify-center w-full h-full cursor-pointer "
            >
              <motion.h1
                whileHover={{ scale: 1.1 }}
                className={`text-white uppercase font-jost ${
                  batchIndex === activeTab
                    ? "xs:text-base sm:text-xl text-glow"
                    : "xs:text-xs sm:text-sm"
                }`}
              >
                Batch {batchIndex}
              </motion.h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TabComponent;
