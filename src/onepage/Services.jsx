import { useState } from "react";
import { Link } from "react-router-dom";
import services from "../json/services.json";
import { motion } from "framer-motion";

const Services = () => {
  const defaultService =
    services.find((service) => service.title === "Event Management") ||
    services[0];
  const [selectedService, setSelectedService] = useState(defaultService);
  const [backgroundImage, setBackgroundImage] = useState(
    defaultService.thumbnail
  );

  const handleMouseEnter = (service) => {
    setSelectedService(service);
    setBackgroundImage(service.thumbnail);
  };

  return (
    <div
      className="relative pt-48 h-full max-w-screen-2xl mx-auto px-12 shadow-inner-overlay"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-30">
        <section className="mb-4 h-48">
          <h1 className="text-left text-[65px] leading-none text-white font-metropolis font-bold tracking-tighter">
            {selectedService.title}
            <br />
            {selectedService.subtitle}
          </h1>
          <p className="font-jost text-base text-white">
            {selectedService.heading.text}
          </p>
        </section>
        <section className="mb-12">
          <div>
            <h1 className="font-jost text-white">
              <span className="mr-8">SERVICES</span>
              <span>Let&apos;s discover how far your business can go!</span>
            </h1>
          </div>
          <div className="flex justify-evenly gap-4 mt-4 mb-4">
            {services.map((service) => (
              <Link to={`/services/${service.link}`} key={service.id}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  onMouseEnter={() => handleMouseEnter(service)}
                  className={`relative flex w-72 h-48 rounded-2xl p-4 items-end hover:cursor-pointer ${
                    selectedService.id === service.id
                      ? "scale-110 border-orange border-2 mx-4"
                      : "border-2 border-white"
                  }`}
                >
                  <img
                    src={service.thumbnail}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full z-0 rounded-2xl object-cover"
                  />
                  <h2 className="font-metropolis font-bold text-white text-2xl flex flex-col leading-none z-10">
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
