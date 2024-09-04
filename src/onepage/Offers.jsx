import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import offers from "../json/offers.json";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";

const Offers = () => {
  const controls = useAnimation();

  return (
    <div className="bg-blurred-planets h-screen mx-auto bg-cover flex flex-col justify-center">
      <section className="text-center flex flex-col justify-center xl:pt-28 ">
        <motion.div
          className="lg:px-20 xl:px-28 2xl:px-36 w-full"
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          <h1 className="font-metropolis font-bold text-white xs:text-2xl  md:text-4xl 3xl:text-5xl">
            DIVE INTO THE REALM OF ADVERTISING AND LET YOUR CREATIVITY SHINE
            WITH US!
          </h1>
        </motion.div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          slidesPerView={1} // Default for small screens
          mousewheel={true}
          spaceBetween={0}
          centerInsufficientSlides={true}
          modules={[Mousewheel, Pagination, Navigation]}
          className="h-full w-full pt-16 pb-28 2xl:w-[80%] 3xl:w-[70%] 2xl:px-24  xl:px-32 "
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 320,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 200,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          <div className="flex mt-12 justify-center gap-12">
            {offers.map((offer, index) => (
              <SwiperSlide
                key={index}
                className="w-[35rem] h-full mx-auto flex justify-center bg-transparent"
              >
                <Link
                  to={`/ootb/${offer.link}`}
                  key={offer.id}
                  state={{ offer }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    key={index}
                    className="w-[300px] h-[350px] bg-gray-500 bg-opacity-60 p-6 rounded-2xl flex flex-col justify-end hover:cursor-pointer relative overflow-hidden focus:outline-none"
                  >
                    <div>
                      <h1 className="z-50 text-glow text-left text-xl font-bold font-garnet text-white leading-none mb-2 uppercase">
                        {offer.title} <br /> {offer.subtitle}
                      </h1>
                      {(offer.description && (
                        <p className="text-white font-jost text-base text-left leading-none">
                          {offer.description}
                        </p>
                      )) ||
                        (offer.list && (
                          <ul>
                            {Object.values(offer.list).map(
                              (listItem, index) => (
                                <li
                                  key={index}
                                  className="text-white font-jost text-base text-left leading-none"
                                >
                                  {listItem}
                                </li>
                              )
                            )}
                          </ul>
                        ))}
                    </div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </div>
  );
};

export default Offers;
