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
    <div className="relative h-full bg-rocket bg-auto mx-auto">
      <div className="absolute inset-0 w-full h-full z-0 bg-black bg-opacity bg-opacity-50 flex">
        <div className="absolute inset-0 lg:w-1/2 h-full z-0 bg-black bg-opacity bg-opacity-10"></div>
      </div>
      <div className="relative z-10">
        <div className="xs:px-3 xl:px-12 lg:w-full lg:flex">
          <section className="relative w-full lg:w-1/2 flex flex-col">
            <Link to="/">
              <div className="flex items-center xs:h-24 md:h-28 lg:h-36 x:-ml-5 ssm:-ml-9 md:-ml-12 justify-start w-full">
                <div className="rotate-90 xs:w-28 xs:-ml-[60px] md:w-36 md:-ml-7 xl:-ml-16">
                  <img
                    src="/assets/others/BackShadow.webp"
                    alt="Back Flare"
                    className="transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow"
                  />
                </div>
                <span className="text-white font-jost flex items-center gap-4 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow">
                  <IoIosArrowBack size={24} />
                  <p className="xs:text-xs md:text-base">
                    BACK TO OTHER SERVICES
                  </p>
                </span>
              </div>
            </Link>
            <div className="md:ml-10">
              <section className="mb-4">
                <h1
                  key={service.id}
                  className="font-metropolis font-bold xs:text-4xl sm:text-5xl md:text-6xl flex flex-col leading-none text-white tracking-tighter"
                >
                  <span className="text-orange-red">{service.title}</span>
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
              <section className="w-max p-4 font-jost text-white border mb-12 xs:text-sm md:text-base">
                <Link to="/">
                  <h1>COME ONBOARD NOW</h1>
                </Link>
              </section>
            </div>
          </section>
          <section className="relative w-full lg:w-1/2 flex flex-col lg:pt-36 overflow-auto lg:h-[700px] 3xl:h-[850px] hide-scrollbar">
            {/* <motion.div
              className="xs:px-4 lg:px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="font-metropolis text-2xl font-bold text-white text-center mb-4">
                <HighlightText
                  text={service.heading.text}
                  highlight={service.heading.highlight}
                  highlightClassName="text-orange-red"
                />
              </div>
              <div className="w-full mt-8 mb-4 rounded-xl">
                {service.images && Object.keys(service.images).length > 0 ? (
                  Object.entries(service.images).map(
                    ([groupKey, imageGroup], groupIndex) => {
                      const captions = Object.entries(
                        imageGroup.caption || {}
                      ).map(([key, caption]) => (
                        <p key={key} className="text-white text-justify mt-2">
                          {caption}
                        </p>
                      ));

                      return (
                        <motion.div
                          key={groupIndex}
                          className="mb-12 border-b-4 border-orange pb-12"
                          id={
                            service.offers[groupKey]
                              ? service.offers[groupKey]
                                  .replace(/\s+/g, "")
                                  .toLowerCase()
                              : `group-${groupIndex}`
                          }
                          initial={{ opacity: 0, y: -30 }}
                          whileInView={{ opacity: 1, y: 10 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                          <h3 className="text-xl uppercase font-bold mb-2 text-white text-center font-jost">
                            {service.offers[groupKey] ||
                              `Group ${groupIndex + 1}`}
                          </h3>
                          <div>
                            {Object.entries(imageGroup.img || {}).map(
                              ([imgKey, img], imgIndex) => (
                                <div key={imgIndex} className="rounded-lg mb-4">
                                  <img
                                    src={img}
                                    alt={`Image ${imgIndex + 1}`}
                                    className="rounded-lg"
                                  />
                                </div>
                              )
                            )}
                          </div>
                          <div>
                            <p className="font-jost text-base text-white">
                              {captions}
                            </p>
                          </div>
                        </motion.div>
                      );
                    }
                  )
                ) : (
                  <p className="text-center text-gray-500">
                    No images available for this service.
                  </p>
                )}
              </div>
            </motion.div>
             */}
            <EventsManagement/>
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
