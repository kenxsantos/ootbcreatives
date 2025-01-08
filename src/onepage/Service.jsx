import { useState } from "react";
import { motion } from "framer-motion";
import ReadMoreReadLess from "../components/ReadMoreReadLess";
import { Link } from "react-router-dom";
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

const Service = () => {
  const images = [
    {
      src: "/assets/backgrounds/OOTBVerticalPlanets1.webp",
      title: "Events Management",
      link: "events-management",
    },
    {
      src: "/assets/backgrounds/OOTBVerticalPlanets2.webp",
      title: "Public Relation",
      link: "public-relation",
    },
    {
      src: "/assets/backgrounds/OOTBVerticalPlanets3.webp",
      title: "Branding and Marketing",
      link: "branding-and-marketing",
    },
    {
      src: "/assets/backgrounds/OOTBVerticalPlanets4.webp",
      title: "Commercial Production",
      link: "production",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="w-full h-screen bg-services flex flex-wrap lg:flex-nowrap gap-4 mt-12">
      {/* Left Section */}
      <div className="text-white w-1/2 flex justify-center items-center relative">
        <div className="relative border-8 border-orange-red rounded-full w-[80%] h-[80%] -ml-0 lg:-ml-32 flex items-center justify-center">
          {/* <h1 className="text-white font-jost text-xl md:text-2xl -ml-0 lg:-ml-28 z-10 text-center">
            Let's discover <br />
            how far your business <br />
            can go!
          </h1> */}
          <div className="w-full h-full rounded-full overflow-hidden">
            <motion.img
              src={images[activeIndex].src}
              alt="Active"
              className="w-full h-full object-cover"
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Swiper Section */}
      <div className=" absolute bottom-[-170px] left-[10px]">
        <Swiper
          loop={true}
          effect={"coverflow"}
          direction="horizontal"
          slidesPerView={3}
          lazy="true"
          spaceBetween={0}
          centeredSlides={true}
          onSlideChange={handleSlideChange}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
            thresholdDelta: 50,
          }}
          speed={600}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 80,
            modifier: 1.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Mousewheel, Pagination, Navigation]}
          className="h-[400px] w-[90%] md:w-[650px] overflow-visible"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Link to={`/services/${image.link}`} key={index}>
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  // onMouseEnter={() => setActiveIndex(index)}
                  className="flex justify-center"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-[270px] h-40 object-cover rounded-lg"
                  />
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center pl-4 lg:pl-16">
        <div>
          <h2 className="flex flex-col leading-none text-center lg:text-left text-white font-metropolis font-extrabold tracking-tighter text-3xl md:text-5xl lg:text-6xl">
            <span>BOLD IDEAS</span>
            <span>STELLAR RESULTS</span>
          </h2>
          <section className="mt-4">
            <ReadMoreReadLess />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Service;
