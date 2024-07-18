import React from "react";
import services from "../json/services.json";
import { useState } from "react";
import { Link } from "react-router-dom";
const Services = () => {
  const defaultService =
    services.find((service) => service.title === "Event Management") ||
    services[0];

  // Initialize the state with the default service
  const [selectedService, setSelectedService] = useState(defaultService);

  const handleMouseEnter = (service) => {
    setSelectedService(service);
  };
  return (
    <div className="relative pt-[18rem] h-max max-w-screen-2xl mx-auto px-12">
      <div className="relative z-30">
        <section>
          <section className="mb-4 h-48">
            <h1 className="text-left text-[65px] leading-none text-white font-metropolis font-bold tracking-tighter">
              <span>{selectedService.title}</span>
              <br />
              <span>{selectedService.subtitle}</span>
            </h1>
            <p className="font-jost text-base text-white">
              {selectedService.heading}
            </p>
          </section>
        </section>
        <section className="mb-4">
          <div>
            <h1 className="font-jost text-white">
              <span className="mr-8">SERVICES</span>
              <span>Let's discover how far your business can go!</span>
            </h1>
          </div>
          <div className="flex justify-evenly gap-4 mt-4 mb-4">
            {services.map((service) => (
              <Link to={`/services/${service.link}`} key={service.id}>
                <div
                  onMouseEnter={() => handleMouseEnter(service)}
                  className={`relative flex w-80 h-48 rounded-2xl p-4 flex items-end transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer ${
                    selectedService.id === service.id ||
                    service.title === "Event Management"
                      ? "scale-110 border-orange border-2 mx-4"
                      : "border-2 border-white"
                  }`}
                >
                  <div>
                    <img
                      src={service.thumbnail}
                      alt=""
                      className="absolute inset-0 w-full h-full z-0 rounded-2xl"
                    />
                  </div>
                  <h2 className="font-metropolis font-bold text-white text-2xl flex flex-col leading-none z-10">
                    <span>{service.title}</span>
                    <span>{service.subtitle}</span>
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <img
          src="/assets/others/ShadowOverlay.png"
          alt="Shadow Overlay"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Services;
