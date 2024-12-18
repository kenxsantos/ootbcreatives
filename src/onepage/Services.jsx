import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import services from "../json/services.json";
import ReadMoreButton from "../components/ReadMoreButton";
import { motion } from "framer-motion";

const Services = () => {
  const defaultService =
    services.find((service) => service.title === "Event Management") ||
    services[0];
  const [selectedService, setSelectedService] = useState(defaultService);
  const [isExpanded, setIsExpanded] = useState(false);
  const servicesSectionRef = useRef(null);

  const wordLimit = 35;

  const fullDescription = useMemo(() => {
    return Object.values(selectedService.description).flat().join(" ");
  }, [selectedService]);

  const limitedDescription = useMemo(() => {
    return fullDescription.split(" ").slice(0, wordLimit).join(" ") + "...";
  }, [fullDescription, wordLimit]);

  const handleToggle = () => setIsExpanded((prev) => !prev);

  const handleMouseEnter = (service) => {
    setSelectedService(service);
    setIsExpanded(false);
  };

  const handleScrollToServices = () => {
    servicesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative h-screen mx-auto shadow-inner-overlay overflow-visible xs:px-3 xl:px-12 xs:pt-20 lg:pt-28 xl:pt-24"
      style={{
        backgroundImage: `url(${selectedService.thumbnail})`,
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-30 flex flex-col">
        <section className="h-full 2xl:mt-24">
          <h2 className="text-white font-metropolis font-extrabold leading-none tracking-tighter xs:text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 3xl:text-8xl">
            {selectedService.title}
            <br />
            {selectedService.subtitle}
          </h2>
          <div className="font-jost pr-4 text-white xs:w-full sm:w-4/5 lg:w-1/2 text-justify h-[200px] overflow-y-auto">
            <p className="mb-2 xs:text-sm 2xl:text-lg">
              {isExpanded ? fullDescription : limitedDescription}
            </p>
            <ReadMoreButton
              isExpanded={isExpanded}
              handleToggle={handleToggle}
            />
          </div>
        </section>

        <section
          className="mb-12 2xl:mt-12 xs:mt-16 sm:mt-0"
          ref={servicesSectionRef}
        >
          <div onClick={handleScrollToServices}>
            <h1 className="font-jost text-white xs:text-xs sm:text-sm md:text-base 3xl:text-xl hover:cursor-pointer">
              <span className="xs:mr-4 xl:mr-8">SERVICES</span>
              <span>Let&apos;s discover how far your business can go!</span>
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
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
                  <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />
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
