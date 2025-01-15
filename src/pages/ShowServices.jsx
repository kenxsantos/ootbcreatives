import React from "react";
import FixedNavBar from "../components/FixedNavBar";
import { IoIosArrowBack } from "react-icons/io";
import services from "../json/services.json";
import { useParams, Link } from "react-router-dom";
import HighlightText from "../components/HighlightText";
import { motion } from "framer-motion";
import EventsManagement from "../templates/EventsManagement";

const ShowServices = () => {
  const { slug } = useParams(); // Access the slug from the URL
  const service = services.find((p) => p.link === slug);

  if (!service) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative h-screen bg-show-services bg-cover mx-auto">
      <div className="relative z-10 h-screen">
        <div className="xs:px-3 xl:px-12 lg:w-full lg:flex">
          <section className="relative w-full lg:w-1/2 flex flex-col">
            <div>
              <img
                src="/assets/logo/OOTBLogoWhite.webp"
                alt="logo"
                className="w-24 mt-8"
              />
            </div>
            <Link to="/">
              <div className="flex items-center xs:h-24 md:h-28 lg:h-36 justify-start w-full">
                <span className="text-white font-jost flex items-center gap-4 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow">
                  <IoIosArrowBack size={30} />
                  <p className="xs:text-xs md:text-base">
                    BACK TO OTHER SERVICES
                  </p>
                </span>
              </div>
            </Link>
            <div className="">
              <section className="mb-4">
                <h1
                  key={service.id}
                  className="font-metropolis font-bold xs:text-4xl sm:text-5xl md:text-6xl flex flex-col leading-none text-white tracking-tighter"
                >
                  <span className="text-orange-red">{service.title}</span>
                  <span className="text-white">{service.subtitle}</span>
                </h1>
              </section>
              <section className="pr-28 text-justify">
                {service.description &&
                  Object.values(service.description).map((desc, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 1.2, duration: 0.5 },
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                        transition: { duration: 0.5 },
                      }}
                      className="font-jost mt-4 text-lg text-white"
                    >
                      {desc}
                    </motion.p>
                  ))}
              </section>
              <section className="py-4 mt-12">
                <h1 className="font-jost text-lg text-white">
                  {service.subheading}
                </h1>
              </section>
              <section className="w-max py-2 px-8 font-jost text-white mb-12 xs:text-sm  bg-orange-red rounded-full">
                <Link to="/">
                  <h1>COME ONBOARD NOW</h1>
                </Link>
              </section>
            </div>
          </section>
          <section className="relative w-full lg:w-1/2 flex flex-col lg:pt-36 overflow-auto h-screen hide-scrollbar">
            <motion.div
              className="xs:px-4 lg:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="w-full mt-8 mb-4 rounded-xl">
                <img src={service.typography} alt="" />
              </div>
            </motion.div>

            {/* <EventsManagement /> */}
            <div className="sticky w-full bottom-0 pointer-events-none">
              <img
                src="/assets/others/BottomShadow.webp"
                alt="Bottom Shadow"
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowServices;
