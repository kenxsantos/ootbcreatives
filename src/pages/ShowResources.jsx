import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import FixedNavBar from "../components/FixedNavBar";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";

const ShowResources = () => {
  const location = useLocation();
  const offer = location.state?.offer;
  const [activeCard, setActiveCard] = useState(3);
  const handleSlideChange = (swiper) => {
    setActiveCard(swiper.realIndex);
  };
  return (
    <div className="relative bg-clear-planets bg-cover mx-auto xs:h-full 3xl:h-screen">
      <div className="relative ">
        <FixedNavBar />
        <div className="w-full">
          <section className="relative w-1/2 flex flex-col px-12">
            <Link to="/">
              <div className="flex items-center h-36 -ml-12 justify-start">
                <div className="rotate-90 w-36 -ml-[60px]">
                  <img
                    src="/assets/others/BackShadow.png"
                    alt="Back Flare"
                    className="transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow"
                  />
                </div>
                <span className="text-white font-jost flex items-center gap-4 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow">
                  <IoIosArrowBack size={24} />
                  BACK TO OTHER SERVICES
                </span>
              </div>
            </Link>
          </section>
          <section>
            <div className="-mt-12">
              <h1 className="text-center tracking-tighter font-metropolis text-glow text-white text-5xl font-extrabold uppercase">
                Resources
              </h1>
            </div>
            <div className="w-[90%] h-full mx-auto">
              <Swiper
                effect={"slide"}
                grabCursor={true}
                mousewheel={true}
                spaceBetween={10}
                speed={800}
                loop={true}
                slidesPerView={1}
                centeredSlides={true}
                onSlideChange={handleSlideChange}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: -100,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: -100,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: -100,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1920: {
                    slidesPerView: 3,
                    spaceBetween: -200,
                  },
                }}
                modules={[Mousewheel, Pagination, Navigation]}
                className="w-full h-full flex items-center justify-center py-12"
              >
                {offer.list &&
                  Object.values(offer.list).map((listItem, index) => {
                    // Generate the slug
                    const slug = listItem
                      .toLowerCase()
                      .replace(/ /g, "-")
                      .replace(/\//g, "-");

                    return (
                      <SwiperSlide
                        key={index}
                        className="flex items-center justify-center h-96 overflow-visible"
                      >
                        <Link to={`/ootb/resources/${slug}`}>
                          <motion.div
                            whileHover={{ scale: 1.1, margin: "0px 12px" }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 15,
                            }}
                            className={`mx-1 bg-gray-500 bg-opacity-60 p-6 rounded-2xl flex flex-col justify-end items-center hover:cursor-pointer ${
                              index === activeCard ? "w-72 h-96" : "w-60 h-80"
                            }`}
                          >
                            <h1 className="font-metropolis font-extrabold text-xl text-white text-glow uppercase text-center">
                              {listItem}
                            </h1>
                          </motion.div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>

            <div className="  flex flex-col items-center justify-center">
              <h1 className="text-white font-jost uppercase text-base flex flex-col text-center leading none mt-4">
                <span>Jumpstart your business in the most</span>
                <span>efficent but creative way possible</span>
              </h1>
              <img
                src="/assets/others/lineflare.png"
                alt=""
                className="w-28 mb-4"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowResources;
