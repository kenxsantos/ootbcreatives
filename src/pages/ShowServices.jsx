import React from "react";
import FixedNavBar from "../components/FixedNavBar";
import { IoIosArrowBack } from "react-icons/io";
import services from "../json/services.json";
import { useParams, Link } from "react-router-dom";
import HighlightText from "../components/HighlightText";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";

const ShowServices = () => {
  const { slug } = useParams(); // Access the slug from the URL
  const service = services.find((p) => p.link === slug);

  if (!service) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative max-w-screen-2xl bg-rocket bg-cover mx-auto">
      <div className="absolute inset-0 w-full h-full z-0 bg-black bg-opacity bg-opacity-50">
        <div className="absolute inset-0 w-1/2 h-full z-0 bg-black bg-opacity bg-opacity-10"></div>
      </div>
      <div className="relative z-10">
        <FixedNavBar />
        <div className="px-12 w-full flex">
          <section className="relative w-1/2 flex flex-col">
            <Link to="/">
              <div className="flex items-center h-36 -ml-12 justify-start ">
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
            <div className="ml-10">
              <section className="mb-4">
                <h1
                  key={service.id}
                  className="font-metropolis font-bold text-6xl flex flex-col leading-none text-white tracking-tighter"
                >
                  <span className="text-orange">{service.title}</span>
                  <span className="text-purple">{service.subtitle}</span>
                </h1>
              </section>

              <section>
                {service.offers && (
                  <ol className="list-decimal-none">
                    {Object.values(service.offers).map((offer, index) => (
                      <a
                        key={index}
                        href={`#${offer.replace(/\s+/g, "").toLowerCase()}`} // Use href for in-page linking
                      >
                        <li className="font-jost text-white transition-all duration-300 ease-in-out hover:text-glow hover:cursor-pointer">
                          {offer}
                        </li>
                      </a>
                    ))}
                  </ol>
                )}
              </section>
              <section className="py-8">
                <h1 className="font-jost text-base text-white">
                  {service.subheading}
                </h1>
              </section>
              <section className="w-max p-4 font-jost text-white border mb-12">
                <Link to="/">COME ONBOARD NOW</Link>
              </section>
            </div>
          </section>
          <section className="relative w-1/2 flex flex-col pt-36 overflow-auto h-[630px] hide-scrollbar">
            <motion.div
              className="px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="font-metropolis text-2xl font-bold text-white text-center mb-4">
                <HighlightText
                  text={service.heading.text}
                  highlight={service.heading.highlight}
                  highlightClassName="text-orange"
                />
              </div>
              <div className="w-full mt-8 mb-4 rounded-xl">
                {service.images &&
                  Object.entries(service.images).map(
                    ([groupKey, imageGroup], groupIndex) => (
                      <motion.div
                        key={groupIndex}
                        className="mb-12 border-b-4 border-orange pb-12"
                        id={service.offers[groupKey]
                          .replace(/\s+/g, "")
                          .toLowerCase()}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: -10 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        <h3 className="text-xl uppercase font-bold mb-4 text-white text-center font-jost">
                          {service.offers[groupKey]}
                        </h3>
                        {Object.values(imageGroup).map((img, imgIndex) => (
                          <div key={imgIndex} className="rounded-xl mb-4">
                            <img
                              src={img}
                              alt={`Image ${imgIndex + 1}`}
                              className="rounded-xl"
                            />
                          </div>
                        ))}
                      </motion.div>
                    )
                  )}
              </div>
            </motion.div>
            <div className="sticky w-full bottom-0 pointer-events-none">
              <img
                src="/assets/others/BottomShadow.png"
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
