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
    <div className="w-full h-screen flex flex-wrap lg:flex-nowrap gap-4 mt-12 bg-services bg-cover">
      {/* Left Section */}
      <div className="text-white w-1/2 flex items-center relative">
        <div className="relative border-8 border-orange-red rounded-full w-[80%] h-[80%] -ml-28 flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50 rounded-full" />
            <motion.img
              src={activeCard.thumbnail}
              alt="Active"
              className="w-full h-full object-cover "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        loop={true}
        effect={"coverflow"}
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
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Mousewheel, Pagination, Navigation]}
        className="absolute left-[350px] w-[450px] px-16 h-screen overflow-hidden"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <Link to={`/services/${service.link}`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`relative flex w-full h-48 w-[300px] rounded-2xl p-4 items-end hover:cursor-pointer ${
                  activeCard.id === service.id
                    ? "border-4 border-orange-red"
                    : "border-2 border-white"
                }`}
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

      <div className="w-1/2 flex items-center justify-center p-8">
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
