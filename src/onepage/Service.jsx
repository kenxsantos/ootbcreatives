import { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import ReadMoreButton from "../components/ReadMoreButton";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import services from "../json/services.json";
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
  const defaultService =
    services.find((service) => service.title === "Event Management") ||
    services[0];

  const [activeCard, setActiveCard] = useState(defaultService);

  const [isExpanded, setIsExpanded] = useState(false);
  const servicesSectionRef = useRef(null);

  const wordLimit = 35;

  const fullDescription = useMemo(() => {
    return Object.values(activeCard.description).flat().join(" ");
  }, [activeCard]);

  const limitedDescription = useMemo(() => {
    return fullDescription.split(" ").slice(0, wordLimit).join(" ") + "...";
  }, [fullDescription, wordLimit]);

  const handleToggle = () => setIsExpanded((prev) => !prev);

  const handleSlideChange = (swiper) => {
    setActiveCard(services[swiper.realIndex]);
  };

  return (
    <div className="w-full h-screen xs:items-center xs:justify-center flex flex-wrap lg:flex-nowrap gap-4 mt-16 bg-services bg-cover">
      {/* Left Section */}
      <div className="2xl:w-1/2  flex items-center relative">
        <div className="relative border-8 border-orange-red rounded-full xs:h-[300px] xs:w-[300px] sm:h-[500px] sm:w-[500px] 2xl:w-[650px] 2xl:h-[650px] 2xl:-ml-28 flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50 rounded-full" />
            <motion.img
              src={activeCard.thumbnail}
              alt="Active"
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />
          </div>
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        loop={true}
        effect={"fade"}
        direction="vertical"
        slidesPerView={3}
        lazy="true"
        spaceBetween={0}
        onSlideChange={handleSlideChange}
        centeredSlides={true}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
          thresholdDelta: 50,
        }}
        speed={600}
        coverflowEffect={{
          slideShadows: false,
        }}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
        modules={[EffectCoverflow, Mousewheel, Pagination, Navigation]}
        className="2xl:absolute 2xl:left-[300px] 2xl:px-16 2xl:py-12 h-screen overflow-hidden"
      >
        {services.map((service, index) => (
          <SwiperSlide key={`${service.id}`}>
            <Link to={`/services/${service.link}`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                animate={{
                  marginLeft: activeCard.id === service.id ? "50px" : "0rem",
                  height: activeCard.id === service.id ? "170px" : "150px",
                  width: activeCard.id === service.id ? "270px" : "250px",
                }}
                transition={{
                  damping: 20,
                  duration: 0.5,
                }}
                className="relative flex rounded-2xl p-4 items-end hover:cursor-pointer"
              >
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
                <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="xs:w-full 2xl:w-1/2 flex items-center justify-center xs:p-4 2xl:p-8">
        <div>
          <h2 className="flex flex-col leading-none text-center lg:text-left text-white font-metropolis font-extrabold tracking-tighter text-3xl md:text-5xl lg:text-6xl">
            {activeCard.title}
            <br />
            {activeCard.subtitle}
          </h2>
          <div className="font-jost pr-4 text-white text-justify h-[200px] overflow-visible">
            <p className="mb-2 xs:text-sm 2xl:text-lg">
              {isExpanded ? fullDescription : limitedDescription}
            </p>
            <ReadMoreButton
              isExpanded={isExpanded}
              handleToggle={handleToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
