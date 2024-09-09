import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import services from "../json/services.json";
import ReadMoreButton from "../components/ReadMoreButton";
import { motion } from "framer-motion";

const Services = () => {
  const defaultService =
    services.find((service) => service.title === "Event Management") ||
    services[0];
  const [selectedService, setSelectedService] = useState(defaultService);
  const [backgroundImage, setBackgroundImage] = useState(
    defaultService.thumbnail
  );
  const [translateY, setTranslateY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const wordLimit = 35;

  const fullDescriptionArray = Object.values(selectedService.description).map(
    (desc) => desc.split(" ")
  );

  const fullDescription = fullDescriptionArray.flat();
  const limitedDescription = fullDescription.slice(0, wordLimit).join(" ");

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const servicesSectionRef = useRef(null);

  const handleMouseEnter = (service) => {
    setSelectedService(service);
    setBackgroundImage(service.thumbnail);
  };

  const handleScrollToServices = () => {
    if (servicesSectionRef.current) {
      servicesSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative h-screen mx-auto shadow-inner-overlay overflow-visible xs:px-3 xl:px-12 xs:pt-20 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-30 flex flex-col">
        <section className="h-full mb-20 2xl:mt-24">
          <h2 className="flex flex-col leading-none text-left text-white font-metropolis font-extrabold tracking-tighter xs:text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 3xl:text-8xl">
            {selectedService.title}
            <br />
            {selectedService.subtitle}
          </h2>
          <div className="font-jost pr-4 text-white xs:w-full sm:xl:w-1/2 text-justify h-[100px]">
            {isExpanded ? (
              fullDescriptionArray.map((desc, index) => (
                <p key={index} className="mb-2 xs:text-sm 2xl:text-lg">
                  {desc.join(" ")}
                </p>
              ))
            ) : (
              <p className="mb-2 xs:text-sm 2xl:text-base">
                {limitedDescription}...
              </p>
            )}
            <ReadMoreButton
              isExpanded={isExpanded}
              handleToggle={handleToggle}
            />
          </div>
        </section>
        <section
          className="mb-12 2xl:mt-12"
          style={{
            transform: `translateY(${translateY}px)`,
            transition: "transform 0.3s ease",
          }}
          ref={servicesSectionRef} // Set the ref here
        >
          <div onClick={handleScrollToServices}>
            <h1 className="font-jost text-white xs:text-xs sm:text-sm md:text-base 3xl:text-xl hover:cursor-pointer">
              <span className="xs:mr-4 xl:mr-8">SERVICES</span>
              <span>Let&apos;s discover how far your business can go!</span>
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-8 mb-12">
            {services.map((service) => (
              <Link to={`/services/${service.link}`} key={service.id}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  onMouseEnter={() => handleMouseEnter(service)}
                  className={`relative flex w-full xs:w-40 xs:h-32 sm:h-48 sm:w-64 md:w-72 lg:w-52 lg:h-40 xl:w-[270px] 2xl:h-48 2xl:w-72 3xl:w-[350px] 3xl:h-64 rounded-2xl p-4 items-end hover:cursor-pointer ${
                    selectedService.id === service.id
                      ? "border-2 border-orange"
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
                  <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
