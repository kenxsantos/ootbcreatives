import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TabComponent = ({ yearData }) => {
  const [activeTab, setActiveTab] = useState("1"); // Default to Batch 1
  const { batch, intern } = useParams();
  const swiperRef = useRef(null);
  const batchKey = batch?.replace("batch-", "") || "1"; // Fallback to "1" if batch is undefined

  useEffect(() => {
    if (batch && yearData.batch[batchKey]) {
      setActiveTab(batchKey);
    }
  }, [batch, yearData.batch, batchKey]);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      const updateArrowVisibility = () => {
        swiper.navigation.update(); // Update arrows visibility
      };

      swiper.on("slideChange", updateArrowVisibility);
      updateArrowVisibility(); // Initialize visibility on mount

      return () => {
        swiper.off("slideChange", updateArrowVisibility);
      };
    }
  }, []);

  const handleTabChange = (batchIndex) => {
    setActiveTab(batchIndex);
  };

  const formattedName = (name) => name.toLowerCase().replace(/ /g, "-");

  // Calculate initial slide based on the selected intern
  const initialSlideIndex = Object.keys(
    yearData.batch[activeTab] || {}
  ).findIndex(
    (internIndex) =>
      formattedName(yearData.batch[activeTab][internIndex].name) === intern
  );

  return (
    <div className="relative flex flex-col overflow-auto w-full rounded-3xl px-12 items-center justify-center h-full">
      <div className="relative flex flex-col w-full h-full  overflow-hidden ">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={5}
          mousewheel
          speed={300}
          slidesPerGroup={3}
          centerInsufficientSlides={true}
          initialSlide={initialSlideIndex >= 0 ? initialSlideIndex : 0}
          className="w-full h-full p-2 mt-6"
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
                className="flex items-center justify-center w-24 h-24 cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-full h-full ${
                    isSelected ? "border-2 border-orange" : "border-none"
                  }`}
                >
                  <a
                    href={`/ootb/academy/meet-the-interns/${
                      yearData.year
                    }/batch-${activeTab}/${formattedName(internData.name)}`}
                  >
                    <img
                      src="https://randomuser.me/api/portraits/men/73.jpg"
                      alt={internData.name}
                      className={`w-full h-full object-cover ${
                        isSelected ? "opacity-100" : "opacity-50"
                      }`}
                    />
                  </a>
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
          initialSlide={batchKey - 1} // Adjust initialSlide as needed
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
                  batchIndex === activeTab ? "text-xl text-glow" : "text-sm"
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
